
import NotesList from "./components/NotesList";
import {useState} from "react";
import {nanoid} from 'nanoid';
import Search from "./components/Search";


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

  const [searchText , setSearchText] = useState('');

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

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }


  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
       handleAddNote={addNote}
       handleDeleteNote = {deleteNote}
       />
    </div>

  )
}

export default App;