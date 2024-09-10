import { ChangeEvent, useState } from "react";
import { MensualidadDeuda } from "../../../types/cobros-type";
import { CalendarCheck, ListCheck, Banknote } from "lucide-react";

interface Props {
  datos: MensualidadDeuda;
  onAdd: (mensu: MensualidadDeuda) => void;
  onRemove: (mensu: MensualidadDeuda) => void;
}

export default function MensualidadItem({ datos, onAdd, onRemove }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    !isChecked ? onAdd(datos) : onRemove(datos);
  };

  return (
    <>
      <div className="flex items-center justify-between p-1">
        <div className="flex items-center justify-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="text-base font-bold">
            {datos.mes + " - " + datos.gestion}
          </p>
        </div>
        <div className="flex gap-2">
          {datos.costo}
          <span className="h-6 w-6">
            <Banknote />
          </span>
        </div>
      </div>
    </>
  );
}

{
  /*
export default function MensualidadList() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-base-200 bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-4 3xl:p-![18px] undefined">
          <div className="relative flex flex-row justify-between">
            <div className="flex items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                <span className="material-symbols-rounded h-6 w-6 text-brand-500">
                  <ListCheck />
                </span>
              </div>
              <h4 className="ml-4 text-xl font-bold">Mensualidades</h4>
            </div>
            <button className="flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 rounded-lg">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                className="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
              </svg>
            </button>
          </div>

          <div className="h-full w-full">
            <div className="mt-2 flex items-center justify-between p-2">
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm"
                />
                <p className="text-base font-bold">Landing Page Design</p>
              </div>
              <span className="material-symbols-rounded h-6 w-6 text-navy-700">
                <CalendarCheck />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}*/
}
