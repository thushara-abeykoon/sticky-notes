import './StyleSheets/NoteContainer.css'
import Note from "./Note";
import AddButton from "./AddButton";
import {useEffect, useState} from "react";

function removeFromArray(arr,index){
    let newArr = [];
    for(let i in arr){
        if(i < index)
            newArr[i] = arr[i]
        else if(i>index)
            newArr[i-1] = arr[i];
        else
            continue;
    }
    return newArr;
}
function NoteContainer (props) {

    const [notes,setNotes] = useState([]);
    useEffect(()=>{
        setNotes((props.note!==undefined)?notes=>[...notes,props.note]:[]);
    },[props.count])

   const deleteNote = (noteId)=>{
       setNotes(removeFromArray(notes,noteId));
   }

    return(
        <div className='noteContainer'>
            <AddButton addBtnClick={props.addBtnClick}/>
            {notes.map((elm,index)=>
            <Note message={elm} getNoteValue={props.getNoteValue} id={index} deleteNote={deleteNote}/>)}
        </div>
    )
}

export default NoteContainer;