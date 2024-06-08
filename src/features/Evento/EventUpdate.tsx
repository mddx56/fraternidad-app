import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";
import * as yup from "yup";
import { updateEvento } from "../../services/evento-service";
import { EventoInput, EventoType } from '../../types/EventoType';
import { QUERY_KEY } from "../../utils/constant";


type UpdateEventoProps = {
    evento: EventoType;
    setOpenNoteModal: (open: boolean) => void;
};

const updateEventSchema = yup.object({
    fecha: yup
        .string()
        .required("Fecha de evento es requerido"),
    hora_inicio: yup.string()
        .required("inicio de hora es requerida"),
    hora_fin: yup
        .string()
        .required("fin de hora requerido"),
    descripcion: yup
        .string()
        .required("Ingrese una descripcion"),
    tipo_evento: yup
        .number()
        .required("Tipo de evento es requerido"),
    estado_reserva: yup
        .string()
        .required("Ingrese Estado")
});

//export type UpdateNoteInput = TypeOf<typeof updateNoteSchema>;

const EventUpdate: FC<UpdateEventoProps> = ({ evento, setOpenNoteModal }) => {
    const methods = useForm({
        resolver: yupResolver(updateEventSchema),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;

    useEffect(() => {
        if (evento) {
            methods.reset(evento);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: ({ id, evento }: { id: number; evento: EventoInput }) =>
            updateEvento(id, evento),
        onSuccess(data) {
            console.log(data);
            queryClient.invalidateQueries([QUERY_KEY.EVENTOS]);
            setOpenNoteModal(false);
            toast("Note updated successfully", {
                type: "success",
                position: "top-right",
            });
        },
        onError(error: Error) {
            setOpenNoteModal(false);
            const resMessage =
                //  error.response.data.message ||
                //  error.response.data.detail ||
                error.message ||
                error.toString();
            toast(resMessage, {
                type: "error",
                position: "top-right",
            });
        },
    });

    const onSubmitHandler: SubmitHandler<EventoInput> = async (data) => {
        mutate({ id: evento.id, evento: data });
    };


    return (
        <section>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl text-ct-dark-600 font-semibold">Update Note</h2>
                <div
                    onClick={() => setOpenNoteModal(false)}
                    className="text-2xl text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 ml-auto inline-flex items-center cursor-pointer"
                >
                    <i className="bx bx-x"></i>
                </div>
            </div>{" "}
            <form className="w-full" onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="mb-2">
                    <label className="block text-gray-700 text-lg mb-2" htmlFor="title">
                        Fecha
                    </label>
                    <input
                        className={twMerge(
                            `appearance-none border border-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-2 leading-tight focus:outline-none`,
                            `${errors["fecha"] && "border-red-500"}`
                        )}
                        {...methods.register("fecha")}
                    />
                    <p
                        className={twMerge(
                            `text-red-500 text-xs italic mb-2 invisible`,
                            `${errors["fecha"] && "visible"}`
                        )}
                    >
                        {errors["fecha"]?.message as string}
                    </p>
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-lg mb-2" htmlFor="title">
                        Fecha
                    </label>
                    <input
                        className={twMerge(
                            `appearance-none border border-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-2 leading-tight focus:outline-none`,
                            `${errors["hora_inicio"] && "border-red-500"}`
                        )}
                        {...methods.register("hora_inicio")}
                    />
                    <p
                        className={twMerge(
                            `text-red-500 text-xs italic mb-2 invisible`,
                            `${errors["hora_inicio"] && "visible"}`
                        )}
                    >
                        {errors["hora_inicio"]?.message as string}
                    </p>
                </div>

                <div className="mb-2">
                    <label className="block text-gray-700 text-lg mb-2" htmlFor="title">
                        descripcion
                    </label>
                    <textarea
                        className={twMerge(
                            `appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-2 leading-tight focus:outline-none`,
                            `${errors.descripcion ? "border-red-500" : "border-gray-400"}`
                        )}
                        rows={6}
                        {...register("descripcion")}
                    />
                    <p
                        className={twMerge(
                            `text-red-500 text-xs italic mb-2`,
                            `${errors.descripcion ? "visible" : "invisible"}`
                        )}
                    >
                        {errors.descripcion && errors.descripcion.message}
                    </p>
                </div>
                {/*<Loadin gButton loading={false}>Update Note</Loadin>*/}
            </form>
        </section>
    );
};

export default EventUpdate;
