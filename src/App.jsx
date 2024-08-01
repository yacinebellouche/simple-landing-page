import React, { useState } from "react";
import Header from "./components/Header";
import CoreExample from "./components/CoreExamples.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>
        <CoreExample></CoreExample>
      </main>
    </div>
  );
}

export default App;
