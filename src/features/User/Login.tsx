import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LandingIntro from './LandingIntro'
import { LoginType } from '../../types/UserType';
import { login } from '../../services/userService';
import { useMutation } from '@tanstack/react-query';
import { getUserInfo, setAccessToken, setRefreshToken } from '../../utils/localStorage';
import { AlertWarnig } from '../../components/AlertWarning';


function Login() {

    const navigate = useNavigate();

    const defaultValues: LoginType = {
        username: "",
        password: ""
    };

    const validationSchema = yup.object({
        username: yup
            .string()
            .required("Nombre de usuario es requerido")
            .min(5, "minimo 5")
            .max(10, "el nomnre es muy largo"),
        password: yup.string()
            .required("Contraseña es requerida")
            .min(8, "minimo 8 ")
            .max(32, "Maximo de longitud 32")
    });

    const {
        register,
        handleSubmit,
        formState: { errors }, // get errors of the form
        reset
    } = useForm<LoginType>({
        defaultValues,
        resolver: yupResolver(validationSchema),
    });

    const mutation = useMutation(login, {
        onSuccess: (data) => {
            console.log(data.access);
            setAccessToken(data.access);
            setRefreshToken(data.refresh);
            localStorage.setItem("token", data.access);
            localStorage.setItem("User", JSON.stringify(getUserInfo()));
            reset();
            navigate("/app");
        },
        onError: (data) => {
            console.log(data);
        }
    });

    const onSubmitHandler = (values: LoginType) => {
        console.log(values)
        try {
            mutation.mutate(values);
        } catch (error) {
            console.log(error);
            alert("User created failed");
            alert(error);
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
                        <h2 className='text-2xl font-semibold mb-2 text-center'>Inicia sesión</h2>
                        <form onSubmit={handleSubmit(onSubmitHandler)} >

                            <div className="mb-4">
                                <div className="form-control w-full mb-4">
                                    <label className='label' htmlFor="username">Nombre de Usuario</label>
                                    <input className="input input-bordered w-full" {...register("username")} placeholder='Ingrese Nombre de usuario' id="username" type="text" />
                                    {errors.username && (
                                        <AlertWarnig titleAlert={errors.username.message} />
                                    )}
                                </div>
                                <div className="form-control w-full mb-4">
                                    <label htmlFor="password">Contraseña</label>
                                    <input className="input input-bordered w-full" {...register("password")} placeholder='Ingrese Contraseña' id="password" type="password" />
                                    {errors.password && (
                                        <AlertWarnig titleAlert={errors.password.message} />
                                    )}
                                </div>
                            </div>

                            <div className='text-right text-primary'><a href="/forgot-password"><span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">¿Olvidaste tu contraseña?</span></a>
                            </div>
                            <div className='text-center mt-4'>
                                {mutation.isError ? <AlertWarnig titleAlert={mutation.error.request.responseText} /> : ""}
                            </div>
                            <button
                                type="submit"
                                className="btn mt-2 w-full btn-primary"
                                disabled={mutation.isLoading}>
                                {mutation.isLoading && <span className="loading loading-spinner"></span>}
                                Inicia Sesión
                            </button>

                            {/*<div className='text-center mt-4'>¿No tienes una cuenta? <Link to="/signup"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Regístrate</span></Link></div>*/}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login