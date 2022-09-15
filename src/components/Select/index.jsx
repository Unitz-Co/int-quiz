import React from 'react'
import PropTypes from 'prop-types'
import styles from './Select.module.scss'

export const Select = ({ option, onOk, ...props }) => {
    const handleChange = (e) => {
        onOk?.(e.target.value)
    }
    return (
        <select className={styles.select} onChange={handleChange} {...props}>
            {option?.map(item => (
                <option key={item.value} value={item.value}> {item.label} </option>
            ))}
        </select>
    )
}

Select.prototype = {
    option: PropTypes.array.isRequired,
    handleChange: PropTypes.func
}

Select.defaultprops = {
    handleChange: () => { }
}   