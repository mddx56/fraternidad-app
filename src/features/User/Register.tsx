import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from 'react-hot-toast';
import LandingIntro from './LandingIntro';
import { UserInput } from '../../types/UserType';
import { useMutation } from '@tanstack/react-query';
import { signUp } from '../../services/userService';

function Register() {

    //const navigate = useNavigate();

    const defaultValues: UserInput = {
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: ""
    };

    const validationSchema = yup.object({
        username: yup
            .string()
            .required("Nombre de usuario es requerido")
            .max(10, "el nomnre es muy largo"),
        password: yup.string()
            .required("Contraseña es requerida")
            .min(8, "minimo 8 ")
            .max(32, "Maximo de longitud 32"),
        email: yup
            .string()
            .email("Ingrese con un Correo Electronico valido")
            .required("Email es requerido"),
        first_name: yup
            .string()
            .required("Nombres es requerido"),
        last_name: yup
            .string()
            .required("Apellidos es requerido"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }, // get errors of the form
        reset,
    } = useForm<UserInput>({
        defaultValues,
        resolver: yupResolver(validationSchema),
    });

    const mutation = useMutation(signUp, {
        onSuccess: (data) => {
            console.log(data.message);
            reset();
            //navigate("/login");
            toast.success(data.message, { duration: 5000 });
        },
        onError: (data) => {
            console.log(data);
            toast.error("No registrado..", { duration: 5000 });
        }
    });

    const onSubmitHandler = (values: UserInput) => {
        console.log(values)
        try {
            mutation.mutate(values);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                    <div className=''>
                        <LandingIntro />
                    </div>
                    <div className='py-24 px-10'>
                        <h2 className='text-2xl font-semibold mb-2 text-center'>Registrar Cuenta</h2>
                        <form onSubmit={handleSubmit(onSubmitHandler)} >

                            <div className="mb-4">
                                <div className="form-control w-full mb-4">
                                    <label className='label' htmlFor="username">Nombre de Usuario</label>
                                    <input className="input  input-bordered w-full" {...register("username")} id="username" type="text" />
                                    {errors.username && (
                                        <p className="error-message">{errors.username.message}</p>
                                    )}
                                </div>
                                <div className="form-control w-full mb-4">
                                    <label htmlFor="password">Contraseña</label>
                                    <input className="input  input-bordered w-full" {...register("password")} id="password" type="password" />
                                    {errors.password && (
                                        <p className="error-message">{errors.password.message}</p>
                                    )}
                                </div>
                                <div className="form-control w-full mb-4">
                                    <label htmlFor="email">Correo Electronico</label>
                                    <input className="input  input-bordered w-full" {...register("email")} id="email" type="email" />
                                    {errors.email && (
                                        <p className="error-message">{errors.email.message}</p>
                                    )}
                                </div>
                                <div className="form-control w-full mb-4">
                                    <label htmlFor="first_name">Nombres</label>
                                    <input className="input  input-bordered w-full" {...register("first_name")} id="first_name" type="text" />
                                    {errors.first_name && (
                                        <p className="error-message">{errors.first_name.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="last_name">Apellidos</label>
                                    <input className="input  input-bordered w-full" {...register("last_name")} id="last_name" type="text" />
                                    {errors.last_name && (
                                        <p className="error-message">{errors.last_name.message}</p>
                                    )}
                                </div>
                            </div>
                            <button type="submit" className={"btn mt-2 w-full btn-primary"}>{mutation.isLoading && <span className="loading loading-spinner"></span>}Registrar</button>
                            <div className='text-center mt-4'>¿Ya tienes cuenta?<Link to="/login"><span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Inicia sesion</span></Link></div>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Register