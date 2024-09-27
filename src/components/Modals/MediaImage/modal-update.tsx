import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";
import * as yup from "yup";
import { ErrorText } from "../../Errortext";
import { Modal } from "../../Modal";
import { Title } from "../../Title";
import { updateMediaImage } from "../../../services/medios-service";
import { MediaImageType } from "../../../types/medios-type";

type Props = {
  medioImagen: MediaImageType;
  onClose?: () => void;
};

const UpadateMedioImageModel = ({ medioImagen, onClose }: Props) => {
  const [error, setError] = useState("");

  const medioImagenSchema = yup.object({
    url: yup.string().required("Url es requerido"),
    descripcion: yup.string(),
    secuencia: yup.number().required("es requiere"),
    mostrar: yup.boolean().required("es requiere"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(medioImagenSchema),
    defaultValues: {
      url: medioImagen.url,
      descripcion: medioImagen.descripcion,
      secuencia: medioImagen.secuencia,
      mostrar: medioImagen.mostrar,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    let newData = { ...data, fraternidad: 1 };
    const response = await updateMediaImage(medioImagen.id, newData);
    console.log(response);

    if (response.status == 200) {
      if (onClose) {
        onClose();
      }
      toast("Imagen Actualizada!", {
        type: "success",
        position: "bottom-right",
      });
    } else {
      setError("error");
    }
  });

  return (
    <Modal onClose={onClose} addBackground={true}>
      <Title title="Editar." description="Editar Medio Imagen." />
      <form onSubmit={onSubmit}>
        <div className="mt-4">
          <div className="flex">
            <div className="w-full">
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                placeholder="Url"
                {...register("url")}
              />
              {errors.url?.message && (
                <ErrorText>{errors.url.message}</ErrorText>
              )}
            </div>
            <div className="w-full ml-2">
              <input
                className="input input-bordered w-full max-w-xs"
                placeholder="Descripcion"
                {...register("descripcion")}
              />
              {errors.descripcion?.message && (
                <ErrorText>{errors.descripcion.message}</ErrorText>
              )}
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex">
            <div className="w-full">
              <input
                className="input input-bordered w-full max-w-xs"
                placeholder="secuencia"
                {...register("secuencia")}
              />
              {errors.secuencia?.message && (
                <ErrorText>{errors.secuencia.message}</ErrorText>
              )}
            </div>
            <div className="w-full ml-2">
              <input
                className="checkbox"
                type="checkbox"
                placeholder="Activar"
                {...register("mostrar")}
              />
              {errors.mostrar?.message && (
                <ErrorText>{errors.mostrar.message}</ErrorText>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <button className="btn btn-white" type="button" onClick={onClose}>
              Cerrar
            </button>
            <button type="submit" className="btn btn-primary">
              Actualizar
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
export default UpadateMedioImageModel;
