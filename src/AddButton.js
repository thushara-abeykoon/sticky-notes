import './StyleSheets/AddButton.css'
import {HiPlusSmall} from "react-icons/hi2";
import {useEffect} from "react";
function AddButton(props){

    useEffect(()=>{
        console.log(props.isDarkMode)
    })

    return(
        <div className={(props.isDarkMode)?'addBtnContainer addBtnContainerDark':'addBtnContainer'}>
            <div className={(props.isDarkMode)?'btnBackground btnBackgroundDark':'btnBackground'} onClick={props.addBtnClick}>
                <HiPlusSmall className='addBtnPlus' style={(props.isDarkMode)?{color:'white'}:{}} />
            </div>
        </div>
    )
}

export  default AddButton;