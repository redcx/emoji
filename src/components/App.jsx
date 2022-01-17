import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

/// 1. Create Entry Component
/// 2. Create props to replace hardcodede data.
/// 3. Map throuh the emojipedia array and render Entry components

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
