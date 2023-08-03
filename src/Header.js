import './StyleSheets/Header.css';
import {useState} from "react";
function SearchBar() {
    const [widthChange,setWidthChange] = useState({
        width : '90%'
    });

    const [displaySvg, setDisplaySvg] = useState({display:'none'})

    const [shadow,setShadow] = useState({boxShadow:'none'})

    const handleWidthChange = (e) => {
        setWidthChange((e.target.value !== '')?{width:'95%'}:{width: '90%'});
        setDisplaySvg((e.target.value !== '')?{display: 'block'}:{display: 'none'});

    }

    function handleShadow(){
        setShadow({boxShadow: '0px 0px 10px 2px #cccccc'})
    }


    return(
        <div className='searchArea' style={Object.assign({},shadow,widthChange)}>
            <input type="text" placeholder='Search Your Plannings' onChange={handleWidthChange} id='searchInput' onFocus={handleShadow} onBlur={()=>{setShadow({boxShadow:'none'})}} />
            <svg style={displaySvg} viewBox="0 0 50 50"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>
        </div>
    )
}

function Header() {
    return(
        <header>
            <div className='container'>
                <h1>TO DO LIST</h1>
                <SearchBar />
            </div>
        </header>

    )
}

export default Header;