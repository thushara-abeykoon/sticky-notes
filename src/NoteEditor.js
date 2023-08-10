import './StyleSheets/NoteEditor.css'
import {useEffect, useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {HiPlusSmall} from "react-icons/hi2";

function NoteEditor(props){

    const [textAreaValue,setTextAreaValue] = useState('');

    useEffect(()=>{
        setTextAreaValue(props.noteValue);
    },[props.noteValue]);

    const handleTextAreaValue = (e) => {
        setTextAreaValue('');
        props.setNoteValue('');
        props.getValue(textAreaValue);
        if(textAreaValue!=='')
            props.changeEditorDisplay(false);

    }

    const closeEditor = () => {
        setTextAreaValue('');
        props.setNoteValue('');
        props.changeEditorDisplay(false);
    }

    const editor = <div className='editorContainer'>
        <div className='editorBackground' onClick={closeEditor}></div>
        <div className={(props.isDarkMode)?'editor editorDark':'editor'}>
            <div className='editorBtnContainer'>
                <div className={(props.isDarkMode)?'saveBtnDark':'saveBtn'} onClick={handleTextAreaValue}>
                    <HiPlusSmall className={(props.isDarkMode)?'plusIconDark':'plusIcon'}/>
                </div>
                <div className={(props.isDarkMode)?'crossBtnDark':'crossBtn'} onClick={closeEditor}>
                    <AiOutlineClose className={(props.isDarkMode)?'crossIconDark':'crossIcon'} />
                </div>
            </div>
            <textarea style={(props.isDarkMode)?{backgroundColor:'black',color:'white'}:{}} value={textAreaValue} autoFocus={true} name="editor" id="editor" cols="100" rows="20" onChange={(e)=>{setTextAreaValue(e.target.value)}}></textarea>
        </div>
    </div>;

    if(props.editorDisplay)
        return editor;
    else
        return  <></>

}
export default NoteEditor;