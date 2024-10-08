//import ConfirmationModalBody from '../features/common/components/ConfirmationModalBody'
import { useModelStore } from "../stores/modal-store";

function ModalLayout() {
  const { isOpen, bodyType, size, extraObject, title } = useModelStore();
  // const openModal = useModelStore(state => state.openModal)
  const closeModal = useModelStore((state) => state.openModal);
  const close = () => {
    closeModal();
  };
  console.log(bodyType);
  console.log(extraObject);

  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <div className={`modal ${isOpen ? "modal-open" : ""}`}>
        <div className={`modal-box  ${size === "lg" ? "max-w-5xl" : ""}`}>
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => close()}
          >
            ✕
          </button>
          <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>
          {/* Loading modal body according to different modal type */}
        </div>
      </div>
    </>
  );
}

export default ModalLayout;
