import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LandingIntro from './LandingIntro'
import { UserInput } from '../../types/UserType';



function Login() {

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
    } = useForm<UserInput>({
        defaultValues,
        resolver: yupResolver(validationSchema),
        // mode: "onTouched", // default is "onSubmit"
    });

    const [loading, setLoading] = useState(false);

    const onSubmitHandler = (values: UserInput) => {
        console.log(values)
        try {
            //await login({ });
            //history.push("/");
            setLoading(false);
            alert("User Created Successfully");
        } catch (error) {
            console.log(error);
            alert("User created failed");
            alert(error);
        }
    }


    /*const submitForm = (e) => {
        e.preventDefault()
        setErrorMessage("")
        if (loginObj.username.trim() === "") return setErrorMessage("Ingrese su correo.")
        if (loginObj.password.trim() === "") return setErrorMessage("Ingrese su contraseña.")
        else {
            setLoading(true)
            // Call API to check user credentials and save token in localstorage
            localStorage.setItem("token", "DumyTokenHere")
            setLoading(false)
            window.location.href = '/#/app/welcome/'
        }
    }*/

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
                                        <p className="error-message">{errors.username.message}</p>
                                    )}
                                </div>
                                <div className="form-control w-full mb-4">
                                    <label htmlFor="password">Contraseña</label>
                                    <input className="input input-bordered w-full" {...register("password")} placeholder='Ingrese Contraseña' id="password" type="password" />
                                    {errors.password && (
                                        <p className="error-message">{errors.password.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className='text-right text-primary'><a href="/forgot-password"><span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">¿Olvidaste tu contraseña?</span></a>
                            </div>


                            <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Inicia sesión</button>

                            <div className='text-center mt-4'>¿No tienes una cuenta? <Link to="/signup"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Regístrate</span></Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login