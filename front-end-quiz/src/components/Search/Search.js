import "./Search.scss";
import { BiSearchAlt } from "react-icons/bi"
import { useState } from "react";

function Search({ changeSearchInput }) {
    const [searchInput, setSearchInput] = useState("");

    return (<div className="search-wrapper">
        <div className="search-bar">
            <BiSearchAlt />
            <input onChange={(e) => { setSearchInput(e.target.value) }} type="text" placeholder="name or category..." />
        </div>
        <div className="search-btn" onClick={() => { changeSearchInput(searchInput) }}>Search</div>
    </div>);
}

export default Search;