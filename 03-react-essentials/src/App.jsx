
import {CORE_CONCEPTS, EXAMPLES} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(component) {
    setSelectedTopic(component);
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreConcept) =>
                <CoreConcept key={coreConcept.title} {...coreConcept}/>
            )}
          </ul>
        </section>
        <section id="examples">
            <menu>
              <TabButton selected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
              <TabButton selected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
              <TabButton selected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
              <TabButton selected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
            </menu>

          {!selectedTopic && <h2>Please select a topic</h2>}
          {selectedTopic &&
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].desc}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
          }
        </section>
      </main>
    </div>
  );
}

export default App;
