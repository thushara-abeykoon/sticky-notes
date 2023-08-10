import './StyleSheets/NoteContainer.css'
import Note  from "./Note";
import AddButton from "./AddButton";
import {useEffect, useState} from "react";

function removeFromArray(arr,index){
    let newArr = [];
    for(let i in arr){
        if(i < index)
            newArr[i] = arr[i]
        else if(i>index)
            newArr[i-1] = arr[i];

    }
    return newArr;
}


function getSearchIndexes(arr,message){
    let resultArr = [];

    if(message===undefined){
        arr.forEach((elm,index)=>{
            resultArr.push(index)
        })
    }
    else{
        arr.forEach((elm,index)=>{
                if(elm.startsWith(message))
                    resultArr.push(index);
            }
        )
        return resultArr;
    }
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

   const deleteNote = (noteId)=>{

        setTimeout(()=>{
            setNotes(removeFromArray(notes,noteId));
            // setIndexArr(removeFromArray(indexArr,indexArr.length-1))
            // setIndex(index-1);
            console.log(notes);
            // console.log(indexArr);
        },150)
   }

   useEffect(()=>{
       console.log(notes)
   },[notes]);


    useEffect(()=>{
            setIndexArr(getSearchIndexes(notes,props.searchMessage));
    },[props.searchMessage])


    return (
        <div className='noteContainer'>
            <AddButton addBtnClick={props.addBtnClick} isDarkMode={props.isDarkMode}/>
            {indexArr.map(index=><Note message={notes[index]} getNoteValue={props.getNoteValue} key={index} id={index} deleteNote={deleteNote} isDarkMode={props.isDarkMode}/>)}
        </div>
    );

}

export default NoteContainer;