import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./Data.js";
import PersonList from "./components/PersonList";

function App() {
  const [persons, setPersons] = useState(data);
  const reloadData = () => {
    setPersons([...data]);
  };
  return (
    <main>
      <section className="container">
        <h3>{persons.length} birthdays today</h3>
        <PersonList persons={persons} />
        {persons.length ? (
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPersons([])}
          >
            Clear All
          </button>
        ) : null}
        {persons.length ? null : (
          <button type="button" className="btn btn-block" onClick={reloadData}>
            Reload Data
          </button>
        )}
      </section>
    </main>
  );
}

export default App;
