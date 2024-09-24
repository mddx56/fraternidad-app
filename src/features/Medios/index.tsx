import { Pencil, SquareCheckBig, SquareX, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import CreateMedioImageModal from "../../components/Modals/MediaImage/modal-create";
import DeleteMedioImageModel from "../../components/Modals/MediaImage/modal-delete";
import UpadateMedioImageModel from "../../components/Modals/MediaImage/modal-update";
import { TopSideButtons } from "../../components/TopSideButtons";
import SuspenseContent from "../../containers/SuspenseContent";
import { getAllMediaImages } from "../../services/medios-service";
import { MediaImageType } from "../../types/medios-type";
import { QUERY_KEY } from "../../utils/constant";
import { formattedDate } from "../../utils/date-format";
import TitleCard from "../common/components/Cards/TitleCard";

function Medios() {
  const [selectedMedioImage, setSelectedMedioImage] =
    useState<MediaImageType | null>(null);
  const [deletedMedioImage, setDeletedMedioImage] =
    useState<MediaImageType | null>(null);
  const [isCreateMedioImageModalShown, setIsCreateMedioImageModalShown] =
    useState(false);
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery<MediaImageType[], Error>(
    {
      queryKey: [QUERY_KEY.MEDIA_IMAGE],
      queryFn: () => getAllMediaImages(),
      onSuccess() {
        console.log("se cargo todos las imagenes");
      },
      onError(error: Error) {
        const resMessage = error.message || error.toString();
        toast(resMessage, {
          type: "error",
          position: "top-right",
        });
      },
    }
  );

  useEffect(() => {
    if (
      isCreateMedioImageModalShown === false ||
      selectedMedioImage === null ||
      deletedMedioImage === null
    ) {
      queryClient.invalidateQueries(QUERY_KEY.MEDIA_IMAGE);
    }
  }, [isCreateMedioImageModalShown, selectedMedioImage, deletedMedioImage]);

  if (isLoading) {
    return <SuspenseContent />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <TitleCard
        title="Archivos Multimedia"
        topMargin="mt-2"
        TopSideButtons={
          <TopSideButtons
            onClickBtn={() => setIsCreateMedioImageModalShown(true)}
          />
        }
      >
        {isCreateMedioImageModalShown && (
          <CreateMedioImageModal
            onClose={() => setIsCreateMedioImageModalShown(false)}
          />
        )}
        {selectedMedioImage && (
          <UpadateMedioImageModel
            medioImagen={selectedMedioImage}
            onClose={() => setSelectedMedioImage(null)}
          />
        )}
        {deletedMedioImage && (
          <DeleteMedioImageModel
            medioImagen={deletedMedioImage}
            onClose={() => setDeletedMedioImage(null)}
          />
        )}
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="bg-base-200">
                <th className="w-1/12">Secuencia</th>
                <th className="w-2/12">Imagen</th>
                <th className="w-1/12">Descripcion</th>
                <th className="w-1/12">Mostrar</th>

                <th className="w-2/12">Fecha subida</th>
                <th className="w-1/12"></th>
                <th className="w-1/12"></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((mediaimage, k) => {
                return (
                  <tr key={k}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="font-bold">{mediaimage.secuencia}</div>
                      </div>
                    </td>
                    <td>
                      <img
                        className="mask mask-squircle"
                        loading="lazy"
                        src={mediaimage.url}
                        alt={mediaimage.descripcion}
                      />
                    </td>
                    <td>{mediaimage.descripcion}</td>
                    <td>
                      {" "}
                      {mediaimage.mostrar ? (
                        <SquareCheckBig className="text-primary w-5" />
                      ) : (
                        <SquareX className="text-red-600 w-5" />
                      )}
                    </td>

                    <td>{formattedDate(mediaimage.upload_date ?? "")}</td>
                    <td>
                      <a
                        className="btn btn-ghost btn-xs"
                        onClick={() => setSelectedMedioImage(mediaimage)}
                      >
                        <Pencil className="w-4 h-4" />
                      </a>
                    </td>
                    <td>
                      <a
                        className="btn btn-ghost btn-xs"
                        onClick={() => setDeletedMedioImage(mediaimage)}
                      >
                        <Trash className="w-4 h-4" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}
export default Medios;
