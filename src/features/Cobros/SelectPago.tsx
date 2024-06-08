import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TitleCard from "../common/components/Cards/TitleCard";
import { Coins, Banknote } from "lucide-react";

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
    return (
        <TitleCard title="Cobros" topMargin="mt-2">
            <Steeps />
            <div className="grid h-56 place-items-center">
                <div className="grid grid-cols-2 gap-4 content-between">
                    <motion.button
                        whileHover={{
                            scale: 1.04,
                            transition: {
                                type: "spring",
                                damping: 15,
                                duration: 0.1,
                            },
                        }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        className="btn btn-primary"
                    >
                        <Coins className="h-6 w-6" />
                        <Link to={"/"}>
                            Mensualidad
                        </Link>
                    </motion.button>
                    <motion.button
                        whileHover={{
                            scale: 1.04,
                            transition: {
                                type: "spring",
                                damping: 15,
                                duration: 0.1,
                            },
                        }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        className="btn btn-primary"
                    >
                        <Banknote className="h-6 w-6" />
                        <Link className="" to={"/"}>
                            Extraordinaria
                        </Link>
                    </motion.button>
                </div>
            </div>
        </TitleCard>
    )
}