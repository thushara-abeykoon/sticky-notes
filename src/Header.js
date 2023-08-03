import './Header.css';
function SearchBar() {
    return(
        <textarea name="search" id="search" cols="30" rows="1"></textarea>
    )
}

function Header() {
    return(
        <div>
            <h1>TO DO LIST</h1>
            <SearchBar />
        </div>

    )
}

export default Header;