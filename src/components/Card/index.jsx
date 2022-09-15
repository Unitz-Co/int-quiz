import React from 'react'
import PropTypes from 'prop-types';
import styles from './Card.module.scss'

export const Card = ({ data }) => {
    const { categoriesList, servicesList, skillsList } = data

    return (
        <div className={styles.Card} >
            <div className={styles.avatar_top} style={{ backgroundImage: `url(${data.url})` }} />
            <div className={styles.info_body}>
                <span>{data.name}</span>
                <span>{data.email}</span>
                <span>{data.phone}</span>
                <span style={{ color: data.status === "OFFLINE" ? "silver" : "green" }}>{data.status}</span>
            </div>
            <div className={styles.categories_body}>
                <h3>Categories Collection</h3>
                <div className={styles.container_categories} >
                    {categoriesList.map(item => (
                        <div className={styles.categories} >
                            <div className={styles.categories_avatar} style={{ backgroundImage: `url(${item.avatarUrl?.url})` }} />
                            <div>{item.displayName}</div>
                        </div>)
                    )}
                </div>
            </div>
            <div className={styles.footer}>
                <h3>Skills Collection</h3>
                <ul className={styles.footer_list} >
                    {skillsList.map(item => (
                        <li>{item.displayName}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.footer}>
                <h3>Services Collection</h3>
                <ul className={styles.footer_list} >
                    {servicesList.map(item => (
                        <li>{item.displayName}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.object.isRequired
};