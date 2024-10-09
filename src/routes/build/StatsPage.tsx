import { ITEMS } from "../../config/items.config";
import { usePriorities } from "../../hooks/use-priorities";

export default function StatsPage() {
  const priorities = usePriorities(ITEMS);
  return (
    <div className="stats-page">
      <h2>Stat Priorities</h2>
      <form>
        {
          Object.keys(priorities.stats).map((stat) => {
            return <div key={stat}>{stat}</div>;
          })
        }
      </form>
    </div>
  );
}
