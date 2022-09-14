import React from 'react';
import style from './Search.module.scss';

const Search = ({handleChange}) => {



    return(
        <div className={style.search}>
            <input type="text" placeholder={"Search here"}  onChange={handleChange}/>
        </div>
    )
}
export default Search