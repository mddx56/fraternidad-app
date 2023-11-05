import { Carrusel } from "../../components/Carrusel";
import VideoYt from "../../components/VideoYt";

function Dashboard() {
    return (
        <>
            <div className="grid lg:grid-cols-2  grid-cols-1 gap-6">
                <Carrusel />
                <VideoYt />
            </div>

        </>
    )
}

export default Dashboard