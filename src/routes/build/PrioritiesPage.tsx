import PriorityInput from "../../components/ui/PriorityInput";
import { useBuild } from "../../context/use-build";
import { getItemCost } from "../../lib/utils";

export default function PrioritiesPage() {
    const { priorities, buildOrder } = useBuild();
    const weaponItems = buildOrder
        .filter((x) => x.item.category === "weapon")
        .sort((a, b) => b.value - a.value);
    const vitItems = buildOrder
        .filter((x) => x.item.category === "vitality")
        .sort((a, b) => b.value - a.value);
    const spiritItems = buildOrder
        .filter((x) => x.item.category === "spirit")
        .sort((a, b) => b.value - a.value);

    return (
        <>
            <button onClick={() => priorities.reset()}>Reset</button>
            <div className="priority-page" style={{ display: "flex" }}>
                <div>
                    <h1>Stat Priority</h1>
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
                    <h1>Top Items</h1>
                    <h2>Weapon</h2>
                    {weaponItems.map((x) => (
                        <div
                            key={x.item.name}
                        >{`${getItemCost(x.item)} - ${x.item.name} - ${Math.round(x.value * 1000) / 1000}`}</div>
                    ))}
                    <h2>Vitality</h2>
                    {vitItems.map((x) => (
                        <div
                            key={x.item.name}
                        >{`${getItemCost(x.item)} - ${x.item.name} - ${Math.round(x.value * 1000) / 1000}`}</div>
                    ))}
                    <h2>Spirit</h2>
                    {spiritItems.map((x) => (
                        <div
                            key={x.item.name}
                        >{`${getItemCost(x.item)} - ${x.item.name} - ${Math.round(x.value * 1000) / 1000}`}</div>
                    ))}
                </div>
            </div>
        </>
    );
}
