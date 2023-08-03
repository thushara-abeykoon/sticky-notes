import './StyleSheets/App.css'
import Header from "./Header";
import NoteContainer from "./NoteContainer";
import NoteEditor from "./NoteEditor";
import {useEffect, useState} from "react";

function App() {

    const [editorDisplay,setEditorDisplay] = useState(false);
    const addBtnClick = ()=>{
        setEditorDisplay(true)
    }

    const changeEditorDisplay = (status)=>{
        setEditorDisplay(status);
    }


    const [msg,setMsg] = useState('');
    const getValue = (val) => {
        if(val.length != 0){
            setMsg(val)
        }
        else{
            alert('Null String detected!' )
        }
        alert(msg)
    }


  return (
      <>
          <NoteEditor editorDisplay={editorDisplay} getValue={getValue} changeEditorDisplay={changeEditorDisplay} />
      <div className='main' >
          <Header/>
          <div className='seperator'></div>
          <NoteContainer addBtnClick={addBtnClick}/>
      </div>
      </>
)
}

export default App;
