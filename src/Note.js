import {useEffect, useState} from "react";
import './StyleSheets/Note.css'
import {BiEditAlt} from "react-icons/bi";
import {AiOutlineDelete} from "react-icons/ai";
import {CSSTransition} from "react-transition-group";

function Note(props){
    const [deleted,setDeleted] = useState(false);

    useEffect(()=>{
        setDeleted(true);
    },[]);

    const noteEditClicked = () => {
        props.getNoteValue(props.message);
    }


    const noteDeleteClicked = () => {
        setDeleted(false);
    }
    return(
        <>
            <CSSTransition
                in={deleted}
                timeout={400}
                classNames={{
                    enter: 'note-enter',
                    enterActive:'note-enter-active',
                    exit: 'note-exit',
                    exitActive: 'note-exit-active'
                }}
                unmountOnExit>
                <div className='note'  >
                    <CSSTransition
                        in={deleted}
                        timeout={400}
                        classNames={{
                            enter: 'noteContent-enter',
                            enterActive:'noteContent-enter-active',
                            exit: 'noteContent-exit',
                            exitActive: 'noteContent-exit-active'
                        }}
                        unmountOnExit>
                        <div>
                            <div className='symbolWrapper'></div>
                            <div className='symbolContainer'>
                                <BiEditAlt className='editIcon' onClick={noteEditClicked}/>
                                <AiOutlineDelete className='deleteIcon' onClick={noteDeleteClicked} />
                            </div>
                            <div className='noteMessageContainer'><p> {props.message}</p></div>
                        </div>
                    </CSSTransition>
                </div>
            </CSSTransition>
        </>
    )
}

export default Note;