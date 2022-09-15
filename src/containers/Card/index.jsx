import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Card } from '../../components/Card';
import styles from './CardLayout.module.scss'


export const CardLayout = ({ dataList }) => {

    return (
        <div className={styles.container}>
            {dataList.map((item, index) => {
                return <Card key={index} data={item} />
            })}
        </div>
    )
}
CardLayout.protoTypes = {
    dataList: PropTypes.array.isRequired
}
export default CardLayout