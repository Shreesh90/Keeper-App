import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);

  function setNote(newNote) {
    const { title, content } = newNote;
    setnotes((prevNotes) => {
      return [...prevNotes, { title: title, content: content }];
    });
  }

  function deleted(id) {
    setnotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea createNote={setNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteButton={deleted}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
