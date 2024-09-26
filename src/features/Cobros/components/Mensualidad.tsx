import { MensualidadDeuda } from "../../../types/cobros-type";
import { Cross } from "lucide-react";

interface Props {
  datos: MensualidadDeuda;
  //onAdd: () => void;
}

function Mensualidad({ datos }: Props) {
  console.log(datos);
  return (
    <>
      <div className="card w-44 h-36 min-w-min bg-base-100 shadow-xl hover:shadow-2xl">
        <figure className="bg-primary text-base-100">
          <h2 className="card-title">{datos.mes + " - " + datos.gestion}</h2>
        </figure>
        <div className="card-body">
          <p>{datos.fecha}</p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
              onClick={() => console.log(datos)}
            >
              <Cross className="w-6 h-6 " />
              {datos.costo}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mensualidad;
