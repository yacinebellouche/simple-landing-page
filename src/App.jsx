import React, { useState } from "react";
import Header from "./components/Header";
import CoreData from "./components/CoreData";
import { ITEMS, EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [tabDescription, setTabDescription] = useState(EXAMPLES.components);
  function clickHandler(selectedButton) {
    setTabDescription(selectedButton);
    setSelected(true);
  }
  const [isSelected, setSelected] = useState(false);

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {ITEMS.map((item, index) => (
              <CoreData key={index} item={item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabDescription === EXAMPLES.components}
              onSelect={() => clickHandler(EXAMPLES.components)}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabDescription === EXAMPLES.jsx}
              onSelect={() => clickHandler(EXAMPLES.jsx)}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabDescription === EXAMPLES.props}
              onSelect={() => clickHandler(EXAMPLES.props)}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabDescription === EXAMPLES.state}
              onSelect={() => clickHandler(EXAMPLES.state)}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{tabDescription.title}</h3>
            <p>{tabDescription.description}</p>
            <pre>
              <code>{tabDescription.code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
