import './StyleSheets/Note.css'
import {BiEditAlt} from "react-icons/bi";
import {AiOutlineDelete} from "react-icons/ai";
import {useEffect} from "react";
function Note(props){


    const notEditClicked = ()=>{
        props.getNoteValue(props.message)
    }

    const noteDeleteClicked = () => {
        props.deleteNote(props.id);
    }

    return(
        <div  className='note' id={props.id}  >
            <div className='symbolWrapper'></div>
            <div className='symbolContainer'>
                <BiEditAlt className='editIcon' onClick={notEditClicked}/>
                <AiOutlineDelete className='deleteIcon' onClick={noteDeleteClicked} />
            </div>
            <div className='noteMessageContainer'><p>{props.message}</p></div>
        </div>
    )
}

export default Note;