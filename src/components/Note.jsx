import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  return (
    <div
      className="note"
      onClick={() => {
        props.deleteButton(props.id);
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
