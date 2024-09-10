import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AlertWarnig } from "../../components/AlertWarning";
import { UserAdminType } from "../../types/user-type";
import { FINANCIAL, ROLE } from "../../utils/constant";

interface UpdateProps {
  user: UserAdminType;
  setOpenNoteModal: (open: boolean) => void;
}

export function UserAdminUpdate({ user, setOpenNoteModal }: UpdateProps) {
  setOpenNoteModal(false);

  const updateUserSchema = yup.object({
    username: yup
      .string()
      .required("Por favor, introduce CI de usuario.")
      .min(7, "el nombre de usuari o CI es muy corto")
      .max(35, "el nombre de usuari o CI es muy largo"),
    password: yup
      .string()
      .required("Por favor, introduce una contraseña.")
      .min(8, "La contraseña debe tener al menos 8 letras")
      .max(32, "La contraseña no debe exceder los 32  letras"),
    email: yup
      .string()
      .email("Por favor, introduce una dirección de correo electrónico válida.")
      .required("El correo electrónico es necesario"),
    full_name: yup
      .string()
      .typeError("Solo letras")
      .required("Por favor, introduce tu nombre completo."),
    phone: yup.string(),
    //.required("Nombres Completo es requerido"),
    //ci: yup
    //   .boolean(),
    financial_condition: yup
      .string()
      .required("Por favor, selecciona un Modo de pago."),
    role: yup.string().required("Por favor, selecciona un rol."),
    copy_ci: yup
      .boolean()
      .required("Por favor, confirma si tiene copia de CI."),
  });

  const methods = useForm({
    resolver: yupResolver(updateUserSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (user) {
      methods.reset(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  const queryClient = useQueryClient();
  /*const { mutate: updateNote } = useMutation({
      mutationFn: ({ noteId, note }: { noteId: string; note }) =>
        updateNoteFn(noteId, note),
      console.log(note),
      onSuccess(data) {
        queryClient.invalidateQueries(["getNotes"]);
        setOpenNoteModal(false);
        toast("Note updated successfully", {
          type: "success",
          position: "top-right",
        });
      },
      onError(error: any) {
        setOpenNoteModal(false);
        const resMessage =
          error.response.data.message ||
          error.response.data.detail ||
          error.message ||
          error.toString();
        toast(resMessage, {
          type: "error",
          position: "top-right",
        });
      },
    });*/

  const onSubmitHandler = async (data: any) => {
    // update({ noteId: data.id, note: data });
    console.log(data);
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <form className="w-full" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="username"
                className="label mb-3 block text-base font-medium "
              >
                Cédula de Identidad (CI)
              </label>
              <input
                type="text"
                id="username"
                placeholder="Ingrese su CI"
                className="input w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("username")}
              />
              {errors.username && (
                <AlertWarnig titleAlert={errors.username.message} />
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="copy_ci"
                className="label mb-3 block text-base font-medium "
              >
                Copia de CI
              </label>
              <input
                type="checkbox"
                id="copy_ci"
                className="checkbox checkbox-success outline-none"
                {...register("copy_ci")}
              />
            </div>
          </div>
        </div>

        <div className="form-control mb-5">
          <label
            htmlFor="email"
            className="label mb-3 block text-base font-medium"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese su correo electrónico"
            className="input w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            {...register("email")}
          />
          {errors.email && <AlertWarnig titleAlert={errors.email.message} />}
        </div>
        <div className="form-control mb-5">
          <label
            htmlFor="password"
            className="label mb-3 block text-base font-medium"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Ingrese su contraseña"
            className="input w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            {...register("password")}
          />
          {errors.password && (
            <AlertWarnig titleAlert={errors.password.message} />
          )}
        </div>
        <div className="form-control mb-5">
          <label
            htmlFor="phone"
            className="label mb-3 block text-base font-medium "
          >
            Teléfono
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Ingrese su número de teléfono"
            className="input w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            {...register("phone")}
          />
          {errors.phone && <AlertWarnig titleAlert={errors.phone.message} />}
        </div>
        <div className="form-control mb-5">
          <label
            htmlFor="email"
            className="label mb-3 block text-base font-medium"
          >
            Nombre Completo
          </label>
          <input
            type="text"
            id="full_name"
            placeholder="Ingrese su nombre completo"
            className="input w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            {...register("full_name")}
          />
          {errors.full_name && (
            <AlertWarnig titleAlert={errors.full_name.message} />
          )}
        </div>

        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="financial_condition"
                className="label mb-3 block text-base font-medium"
              >
                Modo de Pago
              </label>
              <select
                id="financial_condition"
                className="select w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("financial_condition")}
              >
                <option disabled selected>
                  Seleccione Modo de pago
                </option>
                <option value={FINANCIAL.NORMAL}>Normal</option>
                <option value={FINANCIAL.PLANPAGO}>Plan de pagos</option>
              </select>
              {errors.financial_condition && (
                <AlertWarnig titleAlert={errors.financial_condition.message} />
              )}
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="role"
                className="label mb-3 block text-base font-medium"
              >
                Rol de Usuario
              </label>
              <select
                id="time"
                className="select w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("role")}
              >
                <option selected disabled>
                  Seleccione un rol
                </option>
                <option value={ROLE.FRATERNO}>Fraterno</option>
                <option value={ROLE.TESORERO}>Tesorero</option>
              </select>
              {errors.role && <AlertWarnig titleAlert={errors.role.message} />}
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            //   disabled={mutation.isLoading}
            className="btn btn-primary hover:shadow-form w-full rounded-md  py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            {/*mutation.isLoading && <span className="loading loading-spinner"></span>*/}
            Agregar Usuario
          </button>
        </div>
      </form>
    </div>
  );
}
