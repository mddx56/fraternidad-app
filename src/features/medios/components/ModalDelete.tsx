import { MediaImageType } from "@/types/medios-type";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import * as yup from "yup";
import { ErrorText } from "../../../components/Errortext";
import { Modal } from "../../../components/Modal";
import { Title } from "../../../components/Title";
import { deleteMediaImage } from "../../../services/medios-service";
import { toast } from "react-toastify";

type Props = {
  medioImagen: MediaImageType;
  onClose?: () => void;
};

const DeleteMedioImageModel = ({ medioImagen, onClose }: Props) => {
  const [error, setError] = useState("");

  const medioImagenSchema = yup.object({
    url: yup.string(),
  });

  const { handleSubmit } = useForm({
    resolver: yupResolver(medioImagenSchema),
    defaultValues: {
      url: medioImagen.url,
    },
  });

  const onSubmit = handleSubmit(async () => {
    const response = await deleteMediaImage(medioImagen.id);
    console.log(response);

    if (response.status == 204) {
      if (onClose) {
        onClose();
      }
      toast("Imagen Eliminada!", {
        type: "success",
        position: "top-right",
      });
    } else {
      setError("error");
    }
  });

  return (
    <Modal onClose={onClose} addBackground={true}>
      <Title title="Eliminar" description="Medio Imagen." />
      <form onSubmit={onSubmit}>
        <div className="mt-4">
          <div className="flex flex-col items-center">
            <img
              src={medioImagen.url}
              loading="lazy"
              className="mask mask-squircle h-36 w-36"
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <button className="btn btn-white" type="button" onClick={onClose}>
              Cerrar
            </button>
            <button type="submit" className="btn btn-primary">
              Eliminar
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
export default DeleteMedioImageModel;
