import {MdDarkMode} from "react-icons/md";
import {HiSun} from "react-icons/hi";
import './StyleSheets/modeChanger.css'
import {useEffect, useState} from "react";
function ModeChanger(props){

    const [isDarkMode,setIsDarkMode] = useState(false);

    useEffect(()=>{
        props.getMode(isDarkMode);
    },[isDarkMode])

    const darkModeHandler = () => {
        setIsDarkMode(!isDarkMode);
    }

    return(
        <button className={(isDarkMode)?'modeBtnDark':'modeBtnLight'} onClick={darkModeHandler}>
            {(isDarkMode)?<MdDarkMode className='darkModeIcon'/>:<HiSun className='lightModeBtn'/>}
        </button>
    )
}

export default ModeChanger;