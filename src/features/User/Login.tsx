import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useShallow } from "zustand/react/shallow";
import ErrorText from "../../components/Typography/ErrorText";
import { useAuthStore } from "../../stores/auth-store";
import { LoginType } from "../../types/user-type";
import LandingIntro from "./LandingIntro";
import { useEffect, useState } from "react";

function Login() {
  const navigate = useNavigate();

  const { loginUser, checkAuthStatus, status } = useAuthStore(
    useShallow((state) => ({
      loginUser: state.loginUser,
      checkAuthStatus: state.checkAuthStatus,
      status: state.status
    }))
  )
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (status === 'authorized') navigate("/app");
    setErrorMsg("")
  }, [])


  const defaultValues: LoginType = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Nombre de usuario es requerido")
      .min(5, "Minimo de longitud es 5")
      .max(10, "el nomnre es muy largo"),
    password: yup
      .string()
      .required("Contraseña es requerida")
      .min(8, "Minimo de longitud 8 ")
      .max(32, "Maximo de longitud 32"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const mutation = useMutation(loginUser, {
    onSuccess: (data) => {
      console.error(data);
      checkAuthStatus();
      reset();
      setErrorMsg(JSON.stringify(data));
      navigate("/app");
    },
    onError: (data) => {
      setErrorMsg(JSON.stringify(data));
    },
  });

  const onSubmitHandler = (values: LoginType) => {
    try {
      mutation.mutate(values);
    } catch (error) {
      setErrorMsg(JSON.stringify(error));
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Inicia sesión
            </h2>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="mb-4">
                <div className="form-control w-full mb-4">
                  <label className="label" htmlFor="username">
                    Nombre de Usuario
                  </label>
                  <input
                    className="input input-bordered w-full"
                    {...register("username")}
                    placeholder="Ingrese Nombre de usuario"
                    id="username"
                    type="text"
                  />
                  {errors.username && (<ErrorText styleClass="mt-2">{errors.username.message}</ErrorText>
                  )}
                </div>
                <div className="form-control w-full mb-4">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    className="input input-bordered w-full"
                    {...register("password")}
                    placeholder="Ingrese Contraseña"
                    id="password"
                    type="password"
                  />
                  {errors.password && (
                    <ErrorText styleClass="mt-2">{errors.password.message}</ErrorText>
                  )}
                </div>
              </div>

              <div className="text-right text-primary">
                {/*<Link to="/forgot-password">
                  <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    ¿Olvidaste tu contraseña?
                  </span>
                </Link>*/}
              </div>
              <div className="text-center mt-4">
                {mutation.isError ? (<ErrorText styleClass="mt-6">{'Usuario o contraseña incorrecto'}</ErrorText>) : ("")}
              </div>
              {errorMsg ?
                <ErrorText styleClass="mt-2">{errorMsg}</ErrorText>
                : null
              }
              <button

                className="btn mt-2 w-full btn-primary"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading && (
                  <span className="loading loading-spinner"></span>
                )}
                Inicia Sesión
              </button>

              {/*<div className='text-center mt-4'>¿No tienes una cuenta? <Link to="/signup"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Regístrate</span></Link></div>*/}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
