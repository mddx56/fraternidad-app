import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createEvento, getAllTipoEvento } from '../../services/eventoService';
import { useEffect, useState } from 'react';
import { UserProfile } from '../../types/UserType';
import { getUserInfo } from '../../utils/localStorage';
import { Link } from 'react-router-dom';
import { esFinDeSemana } from '../../utils/dateFormat';
import { Estados_Evento, QUERY_KEY } from '../../utils/constant';
import { AlertWarnig } from '../../components/AlertWarning';
import { EventoInput, TipoEventoType } from '../../types/EventoType';


function EventoAdd() {

    const queryClient = useQueryClient();
    const [profileUser, setProfileUser] = useState<UserProfile>(getUserInfo());
    const { isLoading, isError, data, error } = useQuery<TipoEventoType[], Error>([QUERY_KEY.TIPOEVENTO], getAllTipoEvento)


    const defaultValues: EventoInput = {
        fecha: "",
        hora_inicio: "",
        hora_fin: "",
        descripcion: "",
        // estado_reserva: Estados_Evento.PENDIENTE,
        tipo_evento: 0,
        // user: ""
    };

    const validationSchema = yup.object({
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
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<EventoInput>({
        defaultValues,
        resolver: yupResolver(validationSchema),
    });

    const mutation = useMutation(createEvento, {
        onSuccess: (data) => {
            queryClient.invalidateQueries([QUERY_KEY.EVENTOS])
            console.log(data);
            reset();
            toast.success("Evento agregado");

        },
        onError: (data) => {
            console.log(data);
            toast.error("No registrado..");
        }
    });

    const onSubmitHandler = (values: EventoInput) => {
        console.log(values)
        try {
            values.user = profileUser.user_id;
            values.estado_reserva = Estados_Evento.PENDIENTE;
            console.log(values);
            mutation.mutate(values);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setProfileUser(getUserInfo());
        //  console.log(profileUser.user_id);
    }, []);

    return (
        <div className={"card w-full p-6 bg-base-100 shadow-xl mt-2"}>
            <form onSubmit={handleSubmit(onSubmitHandler)} >
                <div className="form-control w-full mb-4">
                    <label className='label' htmlFor="fecha">Fecha</label>
                    <input
                        className='input input-bordered w-full'
                        id="fecha"
                        type="date"
                        {...register('fecha', { required: true })}
                    />
                    {errors.fecha && <AlertWarnig titleAlert={errors.fecha.message} />}
                </div>
                <div className="form-control w-full mb-4">
                    <label className='label' htmlFor="hora_inicio">Hora de inicio</label>
                    <input className='input input-bordered w-full' id='hora_inicio' type="time" {...register('hora_inicio', { required: true })} />
                    {errors.hora_inicio && <AlertWarnig titleAlert={errors.hora_inicio.message} />}
                </div>
                <div className="form-control w-full mb-4">
                    <label className='label' htmlFor="hora_fin">Hora Fin</label>
                    <input className='input input-bordered w-full'
                        id='hora_fin'
                        type="time"
                        {...register('hora_fin', { required: true })} />
                    {errors.hora_fin && <AlertWarnig titleAlert={errors.hora_fin.message} />}
                </div>
                {/*</div>*/}

                <div className="form-control w-full mb-4">
                    <label className='label' htmlFor="descripcion">Descripcion</label>
                    <input
                        className='input input-bordered w-full'
                        id='descripcion'
                        type="text"
                        placeholder='Escriba una descripcion'
                        {...register('descripcion')}
                    />
                    {errors.descripcion && <AlertWarnig titleAlert={errors.descripcion.message} />}
                </div>

                <div className="form-control w-full mb-4">
                    <label className='label' htmlFor="tipo_evento">Tipo de evento</label>
                    <select className='select select-bordered w-full' id="tipo_evento" {...register('tipo_evento', { required: true })}>
                        <option disabled selected>Elija Tipo de evento</option>
                        {data && data.map((es: TipoEventoType) => <option key={es.id} value={es.id}>{es.nombre}, {esFinDeSemana() ? es.costo_finsemana : es.costo_entresemana} Bs.</option>)}
                    </select>
                    <span className="errors">
                        {errors.tipo_evento && 'Elija un Tipo de evento'}
                    </span>
                </div>

                {/*<div className="field">
                    <label className='label' htmlFor="estado_reserva">Estado</label>
                    <select className='select select-bordered w-full' id='estado_reserva' {...register('estado_reserva', { required: true })}>
                        <option disabled selected>Elija un estado</option>
                        {dataEstadoReserva && dataEstadoReserva.map(es => <option key={es.id} value={es.id}>{es.nombre}</option>)}
                    </select>
                    <span className="errors">
                        {errors.estado_reserva && 'Elija un estado de reserva.'}
                    </span>
                        </div>*/}

                <div className="flex justify-between mt-8">
                    {mutation.isLoading ? ('Agregando evento...')
                        : (
                            <>
                                {mutation.isError ? (<div>error al agregar..</div>) : null}

                                <button
                                    className="text-white bg-teal-800 border-teal-800 shadow-md hover:text-teal-900 hover:bg-gray-100 hover:border-2 btn"
                                    type="submit"
                                >
                                    Guardar
                                </button>
                            </>
                        )
                    }
                    <Link
                        to={'/app/calendar'}
                        className="text-gray-600 border-2 border-gray-600 shadow-md hover:text-gray-100 hover:bg-gray-600 btn"
                        type="button"
                    //onClick={navigate('/#/app/')}
                    >
                        Atras
                    </Link>
                </div>
                
            </form>

        </div>
    );
}

export default EventoAdd;
