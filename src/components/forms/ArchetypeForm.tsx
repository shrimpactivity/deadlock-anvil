interface Props {
    archetypes: Record<string, string[]>;
}

export default function ArchetypeForm({ archetypes }: Props) {
    return (
        <form>
            {Object.keys(archetypes).map((name) => {
                return (
                    <div key={name}>
                        <label>{name}</label>
                        <input type="checkbox" />
                    </div>
                );
            })}
        </form>
    );
}
