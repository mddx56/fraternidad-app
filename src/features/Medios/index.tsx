import { MediaImageType } from "@/types/medios-type";
import { Eye, Trash, SquareCheckBig, SquareX } from "lucide-react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllMediaImages } from "../../services/medios-services";
import { QUERY_KEY } from "../../utils/constant";
import { formattedDate } from "../../utils/dateFormat";
import TitleCard from "../common/components/Cards/TitleCard";
import { TopSideButtons } from "../../components/TopSideButtons";

function Medios() {
    const navigate = useNavigate();
    const { isLoading, isError, data, error } = useQuery<MediaImageType[], Error>({
        queryKey: [QUERY_KEY.MEDIA_IMAGE],
        queryFn: () => getAllMediaImages(),
        onSuccess() {
            console.log("ok..");
        },
        onError(error: Error) {
            const resMessage = error.message || error.toString();
            toast(resMessage, {
                type: "error",
                position: "top-right",
            });
        },
    });

    if (isLoading) {
        return <span>Cargando...</span>;
    }

    if (isError) {
        return <span>Error: {error.message}</span>;
    }

    const onClickAdd = () => {
        navigate("/app/addevento");
    };

    return (
        <>
            <TitleCard
                title="Archivos Multimedia"
                topMargin="mt-2"
                TopSideButtons={<TopSideButtons onClickBtn={onClickAdd} />}
            >
                <div className="overflow-x-auto w-full">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr className="bg-base-200">
                                <th className="w-1/12">Secuencia</th>
                                <th className="w-2/12">Imagen</th>
                                <th className="w-1/12">Descripcion</th>
                                <th className="w-1/12">Mostrar</th>
                                <th className="w-1/12">Tag</th>
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
                                                <div className="font-bold">
                                                    {mediaimage.secuencia}
                                                </div>
                                            </div>
                                        </td>
                                        <td><img className="mask mask-squircle" src={mediaimage.url} alt={mediaimage.descripcion} /></td>
                                        <td>{mediaimage.descripcion}</td>
                                        <td> {mediaimage.mostrar ? <SquareCheckBig className="text-primary w-5" /> : <SquareX className="text-red-600 w-5" />}</td>
                                        <td>{mediaimage.tag}</td>
                                        <td>{formattedDate(mediaimage.upload_date)}</td>
                                        <td>
                                            <Link
                                                to={`/moto/${mediaimage.id}`}
                                                className="btn btn-ghost btn-xs"
                                                onClick={() => { }}
                                            >
                                                <Eye className="w-5" />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link
                                                to="/app/"
                                                className="btn btn-ghost btn-xs"
                                                onClick={() => { }}
                                            >
                                                <Trash className="w-5" />
                                            </Link>
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
