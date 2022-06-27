import Button from "@atlaskit/button";
import React from "react";
import AddNoteModal from "./addnotedialg";

export default ({ addNote }) => {
  const [showAddNoteDialog, setShowAddNoteDialog] = React.useState(true);

  const closeModal = () => {
    setShowAddNoteDialog(false);
  };

  return (
    <>
      <Button appearance="primary" onClick={() => setShowAddNoteDialog(true)}>
        Add new note
      </Button>
      <AddNoteModal
        isOpen={showAddNoteDialog}
        closeModal={closeModal}
        addNote={addNote}
      />
    </>
  );
};
