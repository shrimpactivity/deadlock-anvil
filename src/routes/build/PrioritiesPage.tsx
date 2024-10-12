import PriorityInput from "../../components/ui/PriorityInput";
import { useBuild } from "../../context/use-build";

export default function PrioritiesPage() {
    const { priorities, buildOrder } = useBuild();
    console.log(priorities.detailed);

    return (
        <div className="priority-page" style={{display: "flex"}}>
            <div>
            <h2>Stat Priority</h2>
            <div>
                {Object.keys(priorities.groups).map((groupName) => (
                    <PriorityInput
                        key={groupName}
                        label={groupName}
                        value={priorities.groups[groupName]}
                        onClick={() => priorities.increment(groupName)}
                    />
                ))}
            </div>
            </div>
            <div>
                {buildOrder.map(x => (
                    <div>{`${x.item.name} - ${x.value}`}</div>
                ))}
            </div>
        </div>
    );
}
