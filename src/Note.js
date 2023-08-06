import './StyleSheets/Note.css'
import {BiEditAlt} from "react-icons/bi";
import {AiOutlineDelete} from "react-icons/ai";
import {useEffect, useState} from "react";
function Note(props){

    const [deleted,setDeleted] = useState(false);
    const notEditClicked = ()=>{
        props.getNoteValue(props.message)
    }

    useEffect(()=>{
        console.log(deleted)
    },[deleted])

    const noteDeleteClicked = () => {
        setDeleted(true);
        props.deleteNote(props.id);
    }

    return(
        <div className={(deleted)?'note noteDisappear':'note noteAppear'}  >
            <div className='symbolWrapper'></div>
            <div className='symbolContainer'>
                <BiEditAlt className={(deleted)?'editIcon noteContentDisappearing':'editIcon noteContentAppearing'} onClick={notEditClicked}/>
                <AiOutlineDelete className={(deleted)?'deleteIcon noteContentDisappearing':'deleteIcon noteContentAppearing'} onClick={noteDeleteClicked} />
            </div>
            <div className='noteMessageContainer'><p className={(deleted)?'noteContentDisappearing':'noteContentAppearing'}> {props.message}</p></div>
        </div>
    )
}

export default Note;