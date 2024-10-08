import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

interface Props {
  label?: string;
  checked: boolean;
  onChange: (val: boolean) => void;
}

export default function CheckboxInput({
  label,
  checked,
  onChange,
}: Props) {
  <div style={{ display: "flex", alignItems: "center" }}>
    <Checkbox.Root className="CheckboxRoot" checked={checked}>
      <Checkbox.Indicator className="CheckboxIndicator">
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label className="Label">
      {label}
    </label>
  </div>;
}
