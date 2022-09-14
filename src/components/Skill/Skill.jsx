import React from 'react'
import './style.css'

const Skill = ({ skills }) => {
    return (
        <>
            {skills.map((item,index)=>(
                <div key={index} className='skill__name'>{item.displayName}</div>
            ))}
        </>
    )
}

export default Skill