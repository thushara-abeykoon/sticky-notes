import './StyleSheets/Header.css';
import {useState} from "react";
function SearchBar(props) {
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


    function handleSearchMessage(e){
        props.handleSearchMessage(e.target.value);
    }

    return(
        <div className='searchArea' style={Object.assign({},shadow,widthChange)}>
            <input type="text" placeholder='Search Your Plannings' onChange={(e)=>{handleWidthChange(e); handleSearchMessage(e)}} id='searchInput' onFocus={handleShadow} onBlur={()=>{setShadow({boxShadow:'none'})}} />
        </div>
    )
}

function Header(props) {
    return(
        <header>
            <div className='container'>
                <h1>TO DO LIST</h1>
                <SearchBar handleSearchMessage={props.handleSearchMessage} />
            </div>
        </header>

    )
}

export default Header;