/* eslint-disable array-callback-return */
import React from 'react'
import './style.css'

const Category = ({ categories }) => {
    return (<>
        {categories.map((item,index) => {
            if (item.avatarUrl && item.avatarUrl.url) {
                return (
                <div key={index} className='category__item'>
                    <div className='category__item__name'>{item.displayName}</div>
                    <img  className='category__item__img' src={item.avatarUrl.url} alt="" />
                </div>
                )
            }
        })}
    </>
    )
}

export default Category
