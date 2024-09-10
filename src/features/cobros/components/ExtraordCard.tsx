import { Plus } from "lucide-react";
import { DeudaExtraordType } from "../../../types/cobros-type";

type Props = {};

export default function ExtraordCard(extra: DeudaExtraordType) {
  return (
    <>
      <div className="card bg-base-100 w-96 h-36 shadow-xl m-4">
        <div className="card-body">
          <h2 className="card-title">{extra.extraordinaria.concepto}</h2>
          <div className="card-actions justify-end">
            <button
              className="btn btn-square btn-sm"
              onClick={() => console.log(extra.extraordinaria)}
            >
              <Plus className="h-8 w-8" />
            </button>
          </div>
          <p>{`${extra.deuda} bs`}</p>
        </div>
      </div>
    </>
  );
}
