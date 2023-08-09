import './StyleSheets/App.css'
import Header from "./Header";
import NoteContainer from "./NoteContainer";
import NoteEditor from "./NoteEditor";
import {useState} from "react";
import ModeChanger from "./modeChanger";

function App() {

    const [count,setCount] = useState(0);
    const [editorDisplay,setEditorDisplay] = useState(false);
    const addBtnClick = ()=>{
        setEditorDisplay(true)
    }

    const changeEditorDisplay = (status)=>{
        setEditorDisplay(status);
    }


    const [msg,setMsg] = useState()

    //getting value from note editor and pass it to the note container
    const getValue = (val) => {
        if(val.length !== 0){
            setMsg(val);
            setCount(count+1);
        }
        else{
            alert('Null String detected!' )
        }
    }

    const saveBtnClicked = () => {
        alert('btn clicked');
    }


    const [noteValue,setNoteValue] = useState('');

    //getting value from notes and pass it to the note editor to edit the particular note.
    const getNoteValue = (value)=>{
        setNoteValue(value);
        setEditorDisplay(true);
    }

    const [searchMsg,setSearchMessage] = useState('');

    const handleSearchMessage = (value) => {
        setSearchMessage(value);
    }

    const [isDarkMode,setIsDarkMode] = useState(false);

    const getMode=(mode)=>{
        setIsDarkMode(mode);
    }

  return (
      <>
          <ModeChanger getMode={getMode} />
          <NoteEditor editorDisplay={editorDisplay} getValue={getValue} saveBtnClicked={saveBtnClicked} changeEditorDisplay={changeEditorDisplay} noteValue={noteValue} setNoteValue={setNoteValue} isDarkMode={isDarkMode} />
          <div className={(isDarkMode)?'main mainDark':'main'} >
              <Header handleSearchMessage={handleSearchMessage} isDarkMode={isDarkMode}/>
              <div className='seperator'></div>
              <NoteContainer addBtnClick={addBtnClick} note={msg} getNoteValue={getNoteValue} count={count} setCount={setCount} searchMessage={searchMsg} isDarkMode={isDarkMode} />
          </div>
      </>
)
}

export default App;
