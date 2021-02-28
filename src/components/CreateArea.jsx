import React, { useState } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function newNote(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={newNote}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={newNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <Fab
          className="button"
          type="button"
          onClick={() => {
            props.createNote(note);
            setNote({ title: "", content: "" });
          }}
        >
          <AddCircleOutlineIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
