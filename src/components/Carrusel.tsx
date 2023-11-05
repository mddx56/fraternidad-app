import { useQuery } from "@tanstack/react-query";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { MediaImageType } from "../types/FraternidadType";
import { getAllMediaImages } from "../services/fraterService";
import { AlertWarnig } from "./AlertWarning";
import { LoadingInfinity } from "../features/common/components/LoadingInfinity";
import TitleCard from "../features/common/components/Cards/TitleCard";



export function Carrusel() {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    const { isLoading, isError, data, error } = useQuery<MediaImageType[], Error>(['medio'], getAllMediaImages);

    if (isLoading) {
        return <LoadingInfinity />
    }

    if (isError) {
        return <AlertWarnig titleAlert={error.message} />
    }

    return (
        <>
            <TitleCard title="Fotos Flojonazos" topMargin="mt-2" >
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={6000}
                >
                    {data && data.map((medio: MediaImageType) => <div key={medio.id} data-src={medio.url} />)}
                </AutoplaySlider>
            </TitleCard>
        </>
    );
}