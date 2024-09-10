import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import * as yup from "yup";
import { ErrorText } from "../../../components/Errortext";
import { Modal } from "../../../components/Modal";
import { Title } from "../../../components/Title";
import { createMediaImage } from "../../../services/medios-service";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

type Props = {
  onClose?: () => void;
};

const CreateMedioImageModal = ({ onClose }: Props) => {
  const [error, setError] = useState("");

  const medioImagenSchema = yup.object({
    url: yup.string().required("Url es requerido"),
    descripcion: yup.string().required("es requiere"),
    secuencia: yup.number().required("es requiere"),
    mostrar: yup.boolean().required("es requiere"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(medioImagenSchema),
  });

  const mutation = useMutation(createMediaImage, {
    onSuccess: (data) => {
      console.log(data);
      if (onClose) {
        onClose();
      }
      toast("Imagen Creada!", {
        type: "success",
        position: "top-right",
      });
    },
    onError: (data: Error) => {
      setError(data.message);
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    let newData = { ...data, fraternidad: 1 };
    mutation.mutate(newData);
  });

  return (
    <Modal onClose={onClose} addBackground={true}>
      <Title title="Registrar Imagen" description="Medio Imagen." />
      <form onSubmit={onSubmit}>
        <div className="mt-4">
          <div className="flex">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Url :</span>
              </div>
              <input
                type="url"
                className="input input-bordered w-full max-w-xs"
                placeholder="Ingresa url"
                {...register("url")}
              />
              {errors.url?.message && (
                <ErrorText>{errors.url.message}</ErrorText>
              )}
            </label>

            <label className="form-control w-full ml-2">
              <div className="label">
                <span className="label-text">Descripcion :</span>
              </div>
              <input
                className="input input-bordered w-full max-w-xs"
                placeholder="Ingresa descripcion"
                {...register("descripcion")}
              />
              {errors.descripcion?.message && (
                <ErrorText>{errors.descripcion.message}</ErrorText>
              )}
            </label>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Secuencia :</span>
              </div>
              <input
                type="number"
                defaultValue={0}
                className="input input-bordered w-full max-w-xs"
                {...register("secuencia")}
              />
              {errors.secuencia?.message && (
                <ErrorText>{errors.secuencia.message}</ErrorText>
              )}
            </label>
            <label className="form-control w-full ml-2">
              <div className="label">
                <span className="label-text">Mostrar:</span>
              </div>
              <input
                className="checkbox"
                type="checkbox"
                {...register("mostrar")}
              />
              {errors.mostrar?.message && (
                <ErrorText>{errors.mostrar.message}</ErrorText>
              )}
            </label>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <button className="btn btn-white" onClick={onClose}>
              Cerrar
            </button>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
          <div className={twMerge("text-right", !error && "hidden")}>
            <ErrorText>{error}</ErrorText>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default CreateMedioImageModal;
