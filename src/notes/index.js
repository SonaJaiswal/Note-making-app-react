import { useState } from "react";
import NoteCard from "./notescard";

const NoteComponent = ({ notes, deleteNoteAt }) => {
  return (
    <div>
      {notes.map((note, idx) => (
        <NoteCard note={note} onDelete={deleteNoteAt(idx)} />
      ))}
    </div>
  );
};

/*
deleteNoetAtSingle => onDelete is expecting to be called with idx argument

deleteNoteAt(idx) => onDelete is not expecting anything as argunment
*/

export default NoteComponent;
