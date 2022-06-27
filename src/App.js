import "./styles.css";
import { useState } from "react";

import AddNote from "./addnote";
import Notes from "./notes";
import Header from "./header";

export default function App() {
  const [notes, setNotes] = useState(["This is note 1", "This is note 2"]);

  const deleteNoteAt = (idx) => () => {
    const newNotes = notes.filter((_, i) => i !== idx);
    setNotes(newNotes);

    console.log(notes);
  };

  const addNote = (noteText) => {
    const newNotes = [noteText, ...notes];
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <Header totalNotesCount={notes.length} />
      <Notes notes={notes} deleteNoteAt={deleteNoteAt} />
      <AddNote addNote={addNote} />
    </div>
  );
}
