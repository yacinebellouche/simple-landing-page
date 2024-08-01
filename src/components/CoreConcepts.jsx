import CoreData from "./CoreData";
import { ITEMS } from "../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {ITEMS.map((item, index) => (
          <CoreData key={index} item={item} />
        ))}
      </ul>
    </section>
  );
}
