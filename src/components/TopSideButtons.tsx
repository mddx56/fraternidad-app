import { Plus } from "lucide-react";

interface PropsSideButton {
    onClickBtn: () => void;
}


export const TopSideButtons = ({ onClickBtn }: PropsSideButton) => {
    return (
        <div className="inline-block float-right">
            <button
                className="btn px-6 btn-sm normal-case btn-primary"
                onClick={() => {
                    onClickBtn();
                }}
            >
                <Plus className="w-5" />
                Agregar
            </button>
        </div>
    );
};
