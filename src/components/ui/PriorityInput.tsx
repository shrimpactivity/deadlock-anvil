import "./PriorityInput.css";

interface Props {
    label: string;
    value: number;
    onClick: () => void;
    onRightClick: () => void;
}

export default function PriorityInput({ label, value, onClick, onRightClick }: Props) {
    function handleRightClick(event: React.MouseEvent) {
        event.preventDefault();
        onRightClick();
    }

    return (
        <div id={`priority-input-${value}`} className={`priority-input`}>
            <label>
                <button
                    className="priority-button"
                    onClick={onClick}
                    onContextMenu={handleRightClick}
                >
                    {value}
                </button>
                {label}
            </label>
        </div>
    );
}
