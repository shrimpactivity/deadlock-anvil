import "./App.css";
import ArchetypeForm from "./components/forms/ArchetypeForm";
import { Archetypes } from "./config/archetype.config";

function App() {
  // ITEMS.forEach((item) =>
  //   calculateItemPriority(item, { weapon_damage: 1 }, { headshot: 1 })
  // );
  

  return (
    <>
      <nav>
        <h1>Build Tool</h1>
        <h1>Item List</h1>
        <h1>About</h1>
      </nav>
      <main>
        <div><ArchetypeForm archetypes={Archetypes}/></div>
      </main>
    </>
  );
}

export default App;
