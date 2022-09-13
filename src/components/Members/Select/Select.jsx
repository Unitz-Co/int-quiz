import React from "react";
import style from './Select.module.scss';
const Select = ({handleChangeSelect}) => {
    return (
        <div className={style.select}>
            <select onChange={handleChangeSelect}>
                <option value="all">All</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
            </select>
        </div>
    )
}
export default Select