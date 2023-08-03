import './StyleSheets/NoteEditor.css'
import {useEffect, useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {HiPlusSmall} from "react-icons/hi2";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";

function NoteEditor(props){

    const [textAreaValue,setTextAreaValue] = useState('');

    const [removeElement,setRemoveElement] = useState({});

    const handleTextAreaValue = (e) => {
        setTextAreaValue('');
        props.getValue(textAreaValue);
    }

    const editor = <div className='editorContainer'>
        <div className='editorBackground' onClick={()=>{props.changeEditorDisplay(false)}}></div>
        <div className='editor'>
            <div className='editorBtnContainer'>
                <div className='saveBtn' onClick={handleTextAreaValue}>
                    <HiPlusSmall className='plusIcon'/>
                </div>
                <div className='crossBtn' onClick={()=>{props.changeEditorDisplay(false)}}>
                    <AiOutlineClose className='crossIcon' />
                </div>
            </div>
            <textarea name="editor" id="editor" cols="100" rows="20" onChange={(e)=>{setTextAreaValue(e.target.value)}}></textarea>
        </div>
    </div>;

    if(props.editorDisplay)
        return editor;
    else
        return  <></>

}
export default NoteEditor;