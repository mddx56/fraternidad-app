import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from 'react-hot-toast';
import { EstadosReservaType, EventoInput, TipoEventoType } from '../../types/EventoType';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createEvento, getAllEstadoReserva, getAllTipoEvento } from '../../services/eventoService';
import { useEffect, useState } from 'react';
import { UserProfile } from '../../types/UserType';
import { getUserInfo } from '../../utils/localStorage';
import { Link } from 'react-router-dom';


function EventoAdd() {


    const [profileUser, setProfileUser] = useState<UserProfile>(getUserInfo());
    const { isLoading: isLoadingEstadoDeuda, isError: isErrorEstadoDeuda, data: dataEstadoReserva, error: errorEstadoReserva } = useQuery<EstadosReservaType[], Error>(['estadosreserva'], getAllEstadoReserva)
    const { isLoading: isLoadingTipoEvento, isError: isErrorTipoEvento, data: dataTipoEvento, error: errorTipoEvento } = useQuery<TipoEventoType[], Error>(['tipoeventos'], getAllTipoEvento)


    const defaultValues: EventoInput = {
        fecha: "",
        hora_inicio: "",
        hora_fin: "",
        descripcion: "",
        estado_reserva: 0,
        tipo_evento: 0,
        // user: ""
    };

    const validationSchema = yup.object({
        fecha: yup
            .string()
            .required("Nombre de usuario es requerido")
            .max(10, "el nomnre es muy largo"),
        hora_inicio: yup.string()
            .required("Contraseña es requerida"),
        hora_fin: yup
            .string()
            .required("Email es requerido"),
        descripcion: yup
            .string()
            .required("Ingrese una descripcion"),
        tipo_evento: yup
            .number()
            .required("Apellidos es requerido"),
        estado_reserva: yup
            .number()
            .required("Estado de reserva es requerido"),
        /* user: yup
             .string()
             .required("id usuario es requerido"),*/
    });

    const {
        register,
        handleSubmit,
        formState: { errors }, // get errors of the form
        reset,
    } = useForm<EventoInput>({
        defaultValues,
        resolver: yupResolver(validationSchema),
    });

    const mutation = useMutation(createEvento, {
        onSuccess: (data) => {
            console.log(data);
            reset();
            toast.success("Evento agregado", { duration: 5000 });
        },
        onError: (data) => {
            console.log(data);
            toast.error("No registrado..", { duration: 5000 });
        }
    });

    const onSubmitHandler = (values: EventoInput) => {
        console.log(values)
        try {
            values.user = profileUser.user_id;
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
                    <span className="errors">
                        {errors.fecha && 'Fecha es requerida'}
                    </span>
                </div>
                <div className="form-control w-full mb-4">
                    <label className='label' htmlFor="hora_inicio">Hora de inicio</label>
                    <input className='input input-bordered w-full' id='hora_inicio' type="time" {...register('hora_inicio', { required: true })} />
                    <span className="errors">
                        {errors.hora_inicio && 'Ingrese hora de inicio'}
                    </span>
                </div>
                <div className="form-control w-full mb-4">
                    <label className='label' htmlFor="hora_fin">Hora Fin</label>
                    <input className='input input-bordered w-full'
                        id='hora_fin'
                        type="time"
                        {...register('hora_fin', { required: true })} />
                    <span className="errors">
                        {errors.hora_fin && 'Ingrese hora de inicio'}
                    </span>
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
                    <span className="errors">
                        {errors.descripcion &&
                            'Ingrese una descripcion'}
                    </span>
                </div>

                <div className="form-control w-full mb-4">
                    <label className='label' htmlFor="tipo_evento">Tipo de evento</label>
                    <select className='select select-bordered w-full' id="tipo_evento" {...register('tipo_evento', { required: true })}>
                    <option disabled selected>Elija Tipo de evento</option>
                        {dataTipoEvento && dataTipoEvento.map((es: TipoEventoType) => <option key={es.id} value={es.id}>{es.nombre}, {es.precio} Bs.</option>)}
                    </select>
                    <span className="errors">
                        {errors.tipo_evento && 'Elija un Tipo de evento'}
                    </span>
                </div>

                <div className="field">
                    <label className='label' htmlFor="estado_reserva">Estado</label>
                    <select className='select select-bordered w-full' id='estado_reserva' {...register('estado_reserva', { required: true })}>
                        <option disabled selected>Elija un estado</option>
                        {dataEstadoReserva && dataEstadoReserva.map(es => <option key={es.id} value={es.id}>{es.nombre}</option>)}
                    </select>
                    <span className="errors">
                        {errors.estado_reserva && 'Elija un estado de reserva.'}
                    </span>
                </div>

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
            <Toaster />
        </div>
    );
}

export default EventoAdd;
