
import NotesList from "./components/NotesList";
import {useState} from "react";
import {nanoid} from 'nanoid';


const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note with state!",
      date: "1401/03/05"
    },
    {
      id: nanoid(),
      text: "Salam Donya! ♥",
      date: "1401/03/03"
    },
    {
      id: nanoid(),
      text: "React Class",
      date: "1401/02/15"
    },
    {
      id: nanoid(),
      text: "My Last Note!",
      date: "1401/02/26"
    },
    {
      id: nanoid(),
      text: "Hello!",
      date: "1401/02/26"
    },
]);

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes , newNote]
    setNotes(newNotes)
  }


  return (
    <div className="container">
      <NotesList notes={notes}
       handleAddNote={addNote} />
    </div>

  )
}

export default App;