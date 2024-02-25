import React from "react";
import { Delete, Trash2 } from "lucide-react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <Trash2 className="text-white" />
      </button>
    </div>
  );
}

export default Note;
