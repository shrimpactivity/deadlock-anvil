
interface Props {
  value: number;
  onChange: () => void;
}

export default function PriorityButton({value, onChange}: Props) {
  return (
    <button className="priority-button" onClick={() => onChange()}>{value}</button>
  )

}