import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TitleCard from "../common/components/Cards/TitleCard";

export function SelectPago() {
    return (
        <TitleCard title="Cobros" topMargin="mt-2">
            <div className="grid place-items-center">
                <ul className="steps">
                    <li className="step step-primary">Elegir Cobro</li>
                    <li className="step">Elegir Fraterno</li>
                    <li className="step">C</li>
                </ul>
            </div>
            <div className="grid h-screen place-items-center">
                <div className="h-56 grid grid-cols-2 gap-4 content-between">
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
                        <Link className="inline" to={"/"}>
                            {/*<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>*/}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                            </svg>
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
                        <Link className="" to={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>

                            Extraordinaria
                            {/*<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>*/}
                        </Link>
                    </motion.button>
                </div>
            </div>
        </TitleCard>
    )
}