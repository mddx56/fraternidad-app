import * as yup from "yup";
import TitleCard from "../common/components/Cards/TitleCard";
import { UserPasswordType, UserProfile } from '../../types/UserType';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { AlertWarnig } from "../../components/AlertWarning";
import { getUserInfo } from "../../utils/localStorage";
import { useEffect, useState } from "react";
import { changePassword } from "../../services/userService";

function PasswordChanged() {

    const [profileUser, setProfileUser] = useState<UserProfile>(getUserInfo());

    useEffect(() => {
        setProfileUser(getUserInfo());
        //  console.log(profileUser.user_id);
    }, []);

    const defaultValues: UserPasswordType = {
        old_password: "",
        password: "",
        password2: "",
    };

    const validationSchema = yup.object({
        old_password: yup
            .string()
            .required("Por favor, ingrese su contraseña actual")
            .min(8, "La contraseña debe tener al menos 8 caracteres"),
        password: yup.
            string()
            .required("Por favor, ingrese su nueva contraseña")
            .min(8, "La contraseña debe tener al menos 8 caracteres"),
        password2: yup
            .string()
            .required("Por favor, repita la nueva contraseña")
            .oneOf([yup.ref("password")], "Las contraseñas nuevas no coinciden"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<UserPasswordType>({
        defaultValues,
        resolver: yupResolver(validationSchema),
    });

    const mutation = useMutation(changePassword, {
        onSuccess: (data) => {
            console.log(data);
            reset();
            toast.success("contraseña cambiada.");
        },
        onError: (data) => {
            console.log(data);
            toast.error("No registrado..");
        }
    });

    const onSubmitHandler = (values: UserPasswordType) => {
        try {
            values.user_id = profileUser.user_id;
            mutation.mutate(values);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <TitleCard title="Ajustes de la cuenta:" topMargin="mt-2">
                <form className="max-w-2xl" onSubmit={handleSubmit(onSubmitHandler)} >
                    <div className="flex flex-col gap-2 ">
                        <div className="form-control w-full mb-4">
                            <label className="label" htmlFor="old_password">
                                <span className="label-text">Contraseña actual</span>
                            </label>
                            <input
                                className="input input-bordered w-full max-w-xs"
                                placeholder="Ingrese su contraseña actual"
                                id="old_password"
                                name="old_password"
                                type="password"
                                autoComplete="current-password"
                                {...register("old_password", { required: true })}
                            />
                            {errors.old_password && <AlertWarnig titleAlert={errors.old_password.message} />}
                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="label" htmlFor="password">
                                <span className="label-text">Nueva Contraseña</span>
                            </label>
                            <input
                                className="input input-bordered w-full max-w-xs"
                                type="password"
                                placeholder="Ingrese su nueva contraseña"
                                id="password"
                                name="password"
                                autoComplete="new-password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <AlertWarnig titleAlert={errors.password.message} />}
                        </div>

                        <div className="form-control w-full mb-4">
                            <label className="label" htmlFor="password2">
                                <span className="label-text">Repita la nueva Contraseña</span>
                            </label>
                            <input
                                className="input input-bordered w-full max-w-xs"
                                placeholder="Repita la nueva contraseña"
                                id="password2"
                                name="password2"
                                type="password"
                                autoComplete="new-password"
                                {...register("password2", { required: true })}
                            />
                            {errors.password2 && <AlertWarnig titleAlert={errors.password2.message} />}
                        </div>
                        <div className="form-control mb-4">
                            <div className='text-center mt-4 max-w-xs'>
                                {mutation.isError ? <AlertWarnig titleAlert={mutation.error.message} /> : ""}
                            </div>
                            <button
                                type="submit"
                                className="btn mt-2 w-full max-w-xs btn-primary"
                                disabled={mutation.isLoading}>
                                {mutation.isLoading && <span className="loading loading-spinner"></span>}
                                Guardar cambios</button>
                        </div>

                    </div>

                </form>

            </TitleCard>

        </>
    );
}

export default PasswordChanged;