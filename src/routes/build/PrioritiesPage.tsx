import PriorityInput from "../../components/ui/PriorityInput";
import { useBuild } from "../../context/use-build";
import { underscoreToUpperCase } from "../../lib/utils";

export default function PrioritiesPage() {
  const { priorities } = useBuild();

  return (
    <div className="priority-page">
      <h2>Stat Priority</h2>
      <div>
        {Object.keys(priorities.stats).map((stat) => {
          return (
            <PriorityInput
              key={stat}
              label={stat}
              value={priorities.stats[stat]}
              onClick={() => priorities.incrementStat(stat)}
              onRightClick={() => priorities.decrementStat(stat)}
            />
          );
        })}
      </div>
      <h2>Condition Priority</h2>
      <div>
        {Object.keys(priorities.conditions).map((condition) => {
          return <div key={condition}>{underscoreToUpperCase(condition)}</div>;
        })}
      </div>
    </div>
  );
}
