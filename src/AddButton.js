import './StyleSheets/AddButton.css'
import {HiPlusSmall} from "react-icons/hi2";
function AddButton({addBtnClick}){

    return(
        <div className='addBtnContainer'>
            <div className='btnBackground' onClick={addBtnClick}>
                <HiPlusSmall className='addBtnPlus' />
            </div>
        </div>
    )
}

export  default AddButton;