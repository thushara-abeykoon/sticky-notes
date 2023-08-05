import './StyleSheets/AddButton.css'
import {HiPlusSmall} from "react-icons/hi2";
function AddButton({addBtnClick}){

    return(
        <div className='note'>
            <div className='btnBackground' onClick={addBtnClick}>
                {/*<svg enable-background="new 0 0 50 50" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px"><rect fill="none" height="50" width="50"/><line fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="4" x1="9" x2="41" y1="25" y2="25"/><line fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="4" x1="25" x2="25" y1="9" y2="41"/></svg>*/}
                <HiPlusSmall className='addBtnPlus' />
            </div>
        </div>
    )
}

export  default AddButton;