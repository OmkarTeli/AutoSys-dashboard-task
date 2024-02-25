import React from "react";
import "../component.css";
import "../Task.css";
import { useState } from "react";
import CreateArea from "../components/CreateArea";
import Note from "../components/Note";

function Tasks() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="w-full flex flex-col space-y-6 py-12 px-14 bgcolor">
      <h2>Tasks</h2>
      <CreateArea onAdd={addNote} />
      <div>
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;
