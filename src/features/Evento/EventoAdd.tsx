import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EventoType } from '../../types/EventoType';


function EventoAdd() {

    const {
        register,
        formState: { errors },
        //handleSubmit,
    } = useForm({
        //defaultValues: evento || {},
    });

    const navigate = useNavigate();
    navigate('/your_url');

    return (
        <div>
            <form className="mt-4 max-w-md" >
                {/*evento && (
                    <div className="field">
                        <label htmlFor="id">User Id</label>
                        <input type="text" name="id" value={evento.id} disabled />
                    </div>
                )*/}

                <div className="flex flex-col md:flex-row field">
                    <div>
                        <label htmlFor="first_name">Fecha</label>
                        <input
                            type="date"
                            {...register('fecha', { required: true })}
                        />
                        <span className="errors">
                            {errors.fecha && 'First name is required'}
                        </span>
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="time" {...register('hora_inicio', { required: true })} />
                        <span className="errors">
                            {errors.hora_inicio && 'Last name is required'}
                        </span>
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="time" {...register('hora_fin', { required: true })} />
                        <span className="errors">
                            {errors.hora_fin && 'Last name is required'}
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        {...register('tipo_evento', { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <span className="errors">
                        {errors.tipo_evento &&
                            errors.tipo_evento.type === 'required' &&
                            'Email is required'}
                    </span>
                </div>

                <div className="field">
                    <label htmlFor="gender">Gender</label>
                    <select {...register('estado_reserva', { required: true })}>
                        <option value=""></option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                    <span className="errors">
                        {errors.estado_reserva && 'Gender is required'}
                    </span>
                </div>

                <div className="flex justify-between mt-8">
                    <button
                        className="text-white bg-teal-800 border-teal-800 shadow-md hover:text-teal-900 hover:bg-gray-100 hover:border-2 btn"
                        type="submit"
                    >
                        {/*submitText*/}
                    </button>
                    <button
                        className="text-white text-gray-600 border-2 border-gray-600 shadow-md hover:text-gray-100 hover:bg-gray-600 btn"
                        type="button"
                    //onClick={navigate('/#/app/')}
                    >
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EventoAdd;
