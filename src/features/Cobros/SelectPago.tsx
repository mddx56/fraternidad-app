import { Banknote, Coins } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCobroStore } from "../../stores/cobro-store";
import { COBRO } from "../../utils/constant";
import TitleCard from "../common/components/Cards/TitleCard";

export function Steeps() {
    return (
        <div className="grid place-items-center">
            <ul className="steps">
                <li className="step step-primary">Elegir Tipo Cobro</li>
                <li className="step"></li>
                <li className="step"></li>
            </ul>
        </div>
    )
}

export function SelectPago() {

    const setCobro = useCobroStore((state) => state.setTipoCobro);
    const navigate = useNavigate()

    const mensulidadOnClick = () => {
        setCobro(COBRO.MENSUALIDAD);
        navigate('/app/elegirfrater');
    }

    const extraordinariaOnClick = () => {
        setCobro(COBRO.EXTRAORD);
        navigate('/app/elegirfrater');
    }

    return (
        <TitleCard title="Cobros" topMargin="mt-2">
            <Steeps />
            <div className="grid h-56 place-items-center">
                <div className="grid grid-cols-2 gap-4 content-between">
                    <button className="btn btn-primary" onClick={mensulidadOnClick}>
                        <Coins className="h-6 w-6" />
                        Mensualidad
                    </button>

                    <button className="btn btn-primary" onClick={extraordinariaOnClick}>
                        <Banknote className="h-6 w-6" />
                        Extraordinaria
                    </button>
                </div>
            </div>
        </TitleCard>
    )
}