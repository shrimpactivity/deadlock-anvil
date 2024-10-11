import { ReactNode } from "react";
import "./MultiValCheckbox.css"

interface Props {
    value: number;
    onClick: () => void;
    isSimple?: boolean;
}

export default function MultiValCheckbox({ value, onClick, isSimple }: Props) {
    function getDisplayValue() {
        let result: ReactNode = value;
        if (isSimple) {
            if (!value) {
                result = "";
            } else {
                result = "\u2714";
            }
        }
        return result;
    }

    return (
        <button className="multi-val-checkbox" onClick={onClick}>
            {getDisplayValue()}
        </button>
    );
}
