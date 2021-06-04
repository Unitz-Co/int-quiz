import React from 'react';
import { FaSistrix } from "react-icons/fa";
import "./ListAdvisors.css";


export default function SearchBar(props) {
    return (
        <div className="advisors__search">
            <input className="advisors__searchBar" type="text" value={props.input} onChange={(event)=>props.handleChange(event)} placeholder="please text to search" />
            <button className="advisors__searchBtn" onClick={props.handleSearch}><FaSistrix/></button>
        </div>
    )
}
