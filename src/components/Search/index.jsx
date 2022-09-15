import { clsx } from 'clsx';
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styles from './Search.module.scss'

export const Search = ({ onOk }) => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleSearch = (e) => {
        const value = e.target.value
        onOk?.(value)
    }
    return (
        <div className={clsx(styles.Search, toggle && styles.active)} >
            {toggle && <div className={styles.input} >
                <input type="text" onChange={handleSearch} />
            </div>}

            <div className={styles.icon} onClick={handleToggle}>
                <i className="fas fa-search"></i>
            </div>

        </div >
    )
}
Search.protoTypes = {
    onOk: PropTypes.func.isRequired
}
