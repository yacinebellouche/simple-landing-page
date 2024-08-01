import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import React, { useState } from "react";
export default function Tabs() {
  const [tabDescription, setTabDescription] = useState(EXAMPLES.components);
  function clickHandler(selectedButton) {
    setTabDescription(selectedButton);
    setSelected(true);
  }
  return (
    <>
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
    </>
  );
}
