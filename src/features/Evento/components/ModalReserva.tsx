import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";
import * as yup from "yup";
import { ErrorText } from "../../../components/Errortext";
import { Modal } from "../../../components/Modal";
import { Title } from "../../../components/Title";
import { createReserva, getAllTipoEvento } from "../../../services/evento-service";
import { getAllFraters } from "../../../services/user-service";
import { TipoEventoType } from "../../../types/evento-type";
import { UserType } from "../../../types/user-type";
import { QUERY_KEY } from "../../../utils/constant";
import { esFinDeSemana } from "../../../utils/date-format";

type Props = {
    onClose?: () => void;
};

type Item = {
    id: string;
    ci: string,
    name: string;
}

const CreateReservaModal = ({ onClose }: Props) => {
    const [error, setError] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [userId, setUserId] = useState<string>("");

    let fraternos: Item[] = []
    const { data: fraters } = useQuery<UserType[], Error>(
        [QUERY_KEY.FRATERS],
        getAllFraters
    );

    if (fraters)
        fraternos = fraters.map((user: UserType) => ({ "id": user.id, "ci": user.username, "name": user.full_name }))

    const { data } = useQuery<TipoEventoType[], Error>(
        [QUERY_KEY.TIPOEVENTO],
        getAllTipoEvento
    );

    const reservaSchema = yup.object({
        fecha: yup.string().required("fecha es requerido"),
        tipo_evento: yup.number().required("es requiere"),
        //user: yup.string().required("Fraterno es requiere"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(reservaSchema),
    });


    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = event.target.value;
        setSelectedDate(newDate);
    };


    const handleOnSearch = (keyword: string, results: Item[]): void => {
        console.log(keyword, results)
    }

    const handleOnHover = (result: Item) => {
        console.log(result)
    }

    const handleOnSelect = (item: Item) => {
        console.log(item)
        setUserId(item.id);
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item: Item) => {
        return (
            <>
                <span className='w-full px-4 py-0 block text-sm text-left'>
                    {item.ci}<span className='font-bold'>, </span>{item.name}
                </span>
            </>
        )
    }

    const onSubmit = handleSubmit(async (data) => {
        const user = userId;
        const newData = { ...data, user }
        const res = createReserva(newData);
        res
            .then(response => {
                if (response) {
                    if (response?.status == 201) {
                        setError("");
                        if (onClose) {
                            onClose();
                        }
                        toast("Reserva Creada!", {
                            type: "success",
                            position: "bottom-right",
                        });
                    } else {
                        if (response?.status == 400)
                            setError(response?.data.detail)
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            })
    });

    return (
        <Modal onClose={onClose} addBackground={true}>
            <Title title="Registrar Reserva" description="reserva de evento" />
            <form onSubmit={onSubmit}>
                <div className="mt-4">
                    <div className="flex">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Fecha :</span>
                            </div>
                            <input
                                type="date"
                                className="input input-bordered w-full max-w-xs"
                                placeholder="Ingresa fecha"
                                {...register("fecha")}
                                onChange={handleDateChange}
                            />
                            {errors.fecha?.message && (
                                <ErrorText>{errors.fecha.message}</ErrorText>
                            )}
                        </label>
                    </div>
                </div>

                <div className="form-control w-full mb-2">
                    <label className="label" htmlFor="tipo_evento">
                        Tipo de evento
                    </label>
                    <select
                        className="select select-bordered w-full"
                        id="tipo_evento"
                        {...register("tipo_evento", { required: true })}
                    >
                        <option disabled selected>
                            Elija Tipo de evento
                        </option>
                        {data &&
                            data.map((es: TipoEventoType) => (
                                <option key={es.id} value={es.id}>
                                    {es.nombre},{" "}
                                    {esFinDeSemana(selectedDate) ? es.costo_finsemana : es.costo_entresemana}{" "}
                                    Bs.
                                </option>
                            ))}
                    </select>
                    <span className="errors">
                        {errors.tipo_evento && "Elija un Tipo de evento"}
                    </span>
                </div>

                <div className="mt-2">
                    <div className="flex">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Fraterno :</span>
                            </div>
                            <ReactSearchAutocomplete
                                items={fraternos}
                                onSearch={handleOnSearch}
                                onHover={handleOnHover}
                                onSelect={handleOnSelect}
                                onFocus={handleOnFocus}
                                autoFocus
                                styling={{
                                    backgroundColor: "#f5f5f4",

                                }}
                                formatResult={formatResult}
                                placeholder={'Ingrese Ci o Nombre'}
                                showNoResultsText={"No hay resultados 😬"}
                                fuseOptions={{
                                    keys: ['ci', 'name'],
                                }}
                            />
                        </label>

                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <button className="btn btn-white" onClick={onClose}>
                            Cerrar
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>
                    </div>
                    <div className={twMerge("text-right", !error && "hidden")}>
                        <ErrorText>{error}</ErrorText>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default CreateReservaModal;
