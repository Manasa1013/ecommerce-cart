import { useToast } from "../../Contexts/ToastContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/fontawesome-free-solid";
import "./Toast.css";
export function Toast() {
  const { toast, hideToastBar } = useToast();
  return (
    <div className={`toast ${toast.isVisible}`}>
      {toast.message}
      <button className="icon--button" onClick={() => hideToastBar()}>
        <FontAwesomeIcon
          icon={faTimes}
          style={{ color: "var(--primary-green)" }}
        />
      </button>
    </div>
  );
}
