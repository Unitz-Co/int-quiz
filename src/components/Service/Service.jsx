import React from 'react'
import './style.css'
const Service = ({services}) => {
    return (
        <>
            {services.map((item,index)=>(
                <div key={index} className='service__name'>{item.name}</div>
            ))}
        </>
    )
}

export default Service
