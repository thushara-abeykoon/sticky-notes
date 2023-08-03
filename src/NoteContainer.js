import './StyleSheets/NoteContainer.css'
import Note from "./Note";
import AddButton from "./AddButton";
function NoteContainer({addBtnClick}) {

    return(
        <div className='noteContainer'>
            <AddButton addBtnClick={addBtnClick}/>
        </div>
    )
}

export default NoteContainer;