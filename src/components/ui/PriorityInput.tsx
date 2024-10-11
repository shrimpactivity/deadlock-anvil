import MultiValCheckbox from "./MultiValCheckbox";
import "./PriorityInput.css";

interface Props {
    label: string;
    value: number;
    onClick: () => void;
    isCheckbox?: boolean;
}

export default function PriorityInput({ label, value, onClick, isCheckbox }: Props) {
    return (
        <div id={`priority-input-${value}`} className={`priority-input`}>
            <label>
                <MultiValCheckbox value={value} onClick={onClick} />
                {label}
            </label>
        </div>
    );
}
