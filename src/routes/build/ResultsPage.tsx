import { useBuild } from "../../context/use-build";

export default function ResultsPage() {
  const build = useBuild();
  return (
    <div>
      {Object.keys(build.buildOrder).map((item) => {
        return <div key={item}>{`${item}: ${build.buildOrder[item]}`}</div>;
      })}
    </div>
  );
}
