import React, { Fragment, useCallback, useState } from "react";

import Button from "@atlaskit/button";

import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition
} from "@atlaskit/modal-dialog";

export default ({ isOpen, closeModal, addNote }) => {
  const [note, setNote] = useState("");
  console.log({ isOpen });

  const createNote = () => {
    addNote(note);
    closeModal();
  };

  return (
    isOpen && (
      <div>
        <input value={note} onChange={(ev) => setNote(ev.target.value)} />
        <button onClick={createNote}>Add</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    )
  );
};
