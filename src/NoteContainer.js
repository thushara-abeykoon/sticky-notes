import './StyleSheets/NoteContainer.css'
import Note  from "./Note";
import AddButton from "./AddButton";
import {useEffect, useState} from "react";


function removeFromArr(arr,id){
    let newArr = [];
    arr.forEach((elm,index)=>{
        if(index!==id)
            newArr.push(elm);
    })
    return newArr;
}

function getSearchIndexes(arr,message){
    let resultArr = [];
        arr.forEach((elm,index)=>{
                if(elm.startsWith(message))
                    resultArr.push(index);
            }
        )
        return resultArr;
}

function NoteContainer (props) {

    const [notes,setNotes] = useState([]);
    const[indexArr, setIndexArr] = useState([]);
    const[index,setIndex] = useState(-1);
    useEffect(()=>{
        setNotes((props.note!==undefined)?notes=>[...notes,props.note]:[]);
        setIndex(index+1)
        setIndexArr((props.note!==undefined)?indexArr=>[...indexArr,index]:[]);
    },[props.count])





    useEffect(()=>{
            setIndexArr(getSearchIndexes(notes,props.searchMessage));
    },[props.searchMessage])


    function deleteNote(noteId){
        setNotes(removeFromArr(notes,noteId))
        setIndexArr(removeFromArr(indexArr,indexArr.length-1))
        setIndex(index-1);
    }


    return (
        <div className='noteContainer'>
            <AddButton addBtnClick={props.addBtnClick} isDarkMode={props.isDarkMode}/>
            {indexArr.map(index=><Note message={notes[index]} getNoteValue={props.getNoteValue} key={index} id={index} deleteNote={deleteNote} isDarkMode={props.isDarkMode}/>)}
        </div>
    );

}

export default NoteContainer;