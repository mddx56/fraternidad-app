import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
//import { LoadingButton } from "../LoadingButton";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { createEvento, getAllTipoEvento } from '../../services/evento-service';
//import { useEffect, useState } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { AlertWarnig } from "../../components/AlertWarning";
import { EventoInput, TipoEventoType } from '../../types/evento-type';
import { QUERY_KEY } from '../../utils/constant';
import { esFinDeSemana } from '../../utils/date-format';

type ICreateNoteProps = {
    setOpenNoteModal: (open: boolean) => void;
};

const createNoteSchema = yup.object({
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

const EventoCreate: FC<ICreateNoteProps> = ({ setOpenNoteModal }) => {

    const { data } = useQuery<TipoEventoType[], Error>([QUERY_KEY.TIPOEVENTO], getAllTipoEvento)

    const methods = useForm({
        resolver: yupResolver(createNoteSchema),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;

    const queryClient = useQueryClient();

    const { mutate: createNote, isLoading, isError } = useMutation({
        mutationFn: (note: EventoInput) => createEvento(note),
        onMutate() {
            console.log("sus")
        },
        onSuccess(data) {
            console.log(data);
            queryClient.invalidateQueries([QUERY_KEY.EVENTOS]);
            setOpenNoteModal(false);
            toast("Note created successfully", {
                type: "success",
                position: "top-right",
            });
        },
        onError(error: Error) {
            setOpenNoteModal(false);

            const resMessage =
                // error.response.data.message ||
                //error.response.data.detail ||
                error.message ||
                error.toString();
            toast(resMessage, {
                type: "error",
                position: "top-right",
            });
        },
    });

    const onSubmitHandler: SubmitHandler<EventoInput> = async (data) => {
        createNote(data);
    };
    return (
        <section>
            <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-200">
                <h2 className="text-2xl text-ct-dark-600 font-semibold">Crear Evento</h2>
                <div
                    onClick={() => setOpenNoteModal(false)}
                    className="text-2xl text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 ml-auto inline-flex items-center cursor-pointer"
                >
                    <i className="bx bx-x">X</i>
                </div>
            </div>
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
                    {isLoading ? ('Agregando evento...')
                        : (
                            <>
                                {isError ? (<div>error al agregar..</div>) : null}

                                <button
                                    className="text-white bg-teal-800 border-teal-800 shadow-md hover:text-teal-900 hover:bg-gray-100 hover:border-2 btn"
                                    type="submit"
                                >
                                    Guardar
                                </button>
                            </>
                        )
                    }

                </div>

            </form>

        </section>
    );
};

export default EventoCreate;
