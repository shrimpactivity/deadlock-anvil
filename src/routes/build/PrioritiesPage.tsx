import PriorityInput from "../../components/ui/PriorityInput";
import { useBuild } from "../../context/use-build";

export default function PrioritiesPage() {
    const { priorities, buildOrder } = useBuild();
    return (
        <>
            <button onClick={() => priorities.reset()}>Reset</button>
            <div className="priority-page" style={{ display: "flex" }}>
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
                    <h2>Top Items</h2>
                    {buildOrder
                        .sort((a, b) => b.value - a.value)
                        //.slice(0, 15)
                        .map((x) => (
                            <div key={x.item.name}>{`${x.item.name} - ${Math.round(x.value * 1000) / 1000}`}</div>
                        ))}
                </div>
            </div>
        </>
    );
}
