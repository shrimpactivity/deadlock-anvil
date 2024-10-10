import { useBuild } from "../../context/use-build";

export default function ResultsPage() {
    const build = useBuild();

    return (
        <div>
            {build.buildOrder.map(item => (
                <div key={item.name}>
                    <p>{item.name} - {item.buildValue}</p>
                </div>
            ))}
        </div>
    );
}
