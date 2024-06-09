import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { AlertWarnig } from '../../components/AlertWarning';
import { signUp } from '../../services/user-service';
import { UserInput } from '../../types/UserType';
import LandingIntro from './LandingIntro';

function Register() {

    //const navigate = useNavigate();

    const defaultValues: UserInput = {
        username: "",
        password: "",
        email: "",
        full_name: ""
    };

    const validationSchema = yup.object({
        username: yup
            .string()
            .required("Nombre de usuario es requerido")
            .min(7, "el nombre de usuari o CI es muy corto")
            .max(35, "el nombre de usuari o CI es muy largo"),
        password: yup.string()
            .required("Contraseña es requerida")
            .min(8, "la contraseña deve ser minimo de 8 letras")
            .max(32, "la contraseña deve ser maximo de 32 letras"),
        email: yup
            .string()
            .email("Ingrese con un Correo Electronico valido")
            .required("Email es requerido"),
        full_name: yup
            .string()
            .required("Nombres Completo es requerido"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }, // get errors of the form
        reset,
    } = useForm({
        defaultValues,
        resolver: yupResolver(validationSchema),
    });

    const mutation = useMutation(signUp, {
        onSuccess: (data) => {
            console.log(data.message);
            reset();
            //navigate("/login");
            toast.success(data.message);
        },
        onError: (error) => {
            console.log(error);
            toast.error("No registrado..");
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
                                    <label className='label' htmlFor="username">Nombre de Usuario o CI</label>
                                    <input className="input input-bordered w-full" {...register("username")} id="username" placeholder="Ingrese nombre de usuario o CI" type="text" />
                                    {errors.username && (
                                        <AlertWarnig titleAlert={errors.username.message} />
                                    )}
                                </div>
                                <div className="form-control w-full mb-4">
                                    <label htmlFor="password">Contraseña</label>
                                    <input className="input  input-bordered w-full" {...register("password")} id="password" placeholder='Ingrese Contraseña' type="password" />
                                    {errors.password && (
                                        <AlertWarnig titleAlert={errors.password.message} />
                                    )}
                                </div>
                                <div className="form-control w-full mb-4">
                                    <label htmlFor="email">Correo Electronico</label>
                                    <input className="input  input-bordered w-full" {...register("email")} id="email" placeholder="Ingrese correo electronico" type="email" />
                                    {errors.email && (
                                        <AlertWarnig titleAlert={errors.email.message} />
                                    )}
                                </div>
                                <div className="form-control w-full mb-4">
                                    <label htmlFor="full_name">Nombre Completo</label>
                                    <input className="input  input-bordered w-full" {...register("full_name")} id="full_name" placeholder="Ingrese nombre completo" type="text" />
                                    {errors.full_name && (
                                        <AlertWarnig titleAlert={errors.full_name.message} />
                                    )}
                                </div>
                            </div>

                            <button type="submit" disabled={mutation.isLoading} className={"btn mt-2 w-full btn-primary"}>{mutation.isLoading && <span className="loading loading-spinner"></span>}Registrar</button>
                            <div className='text-center mt-4'>¿Ya tienes cuenta?<Link to="/login"><span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Inicia sesion</span></Link></div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register