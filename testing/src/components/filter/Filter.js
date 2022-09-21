import React, { useState } from 'react'
import './Filter.css'
import Data from './../../data1.json'
const Filter = ({setFilter}) => {
    const data = Data.data.advisorProfileCollection.items
    const [name,setName] = useState('')
    const [category,setCategory] = useState('')
    const [status,setStatus] = useState('online')
    const handleChange = (e)=>{
        setCategory(e.target.value)
    }
    const handleChangeStatus = (e)=>{
        setStatus(e.target.value)
    }
    const handleSearch = ()=>{
        setFilter({
            name:name.toLocaleLowerCase(),
            status:status,
            category:category
        })
    }
  return (
    <div className="filter">

        <h2>Filter</h2>
        <div className="filter_contain">
            <input type="text" className="filterName" placeholder='Enter Name here...' onChange={(e)=> setName(e.target.value)}/>
            <div className="status">
                <input type="radio" name="a" id="status" value="online" onChange={handleChangeStatus}/><label for="status">online</label>
                <input type="radio" id="status1" name="a" value="offline" onChange={handleChangeStatus}/> <label for="status1">offline</label>
            </div>
            <span>category: </span>
            <select onChange={handleChange}>
            {
                data.map((da)=>{
                    return da.categoriesCollection.items.map((item,index)=>{
                       
                        return(
                            <option key={index}>{item.displayName}</option>
                        )
                    })
                })
            }
        </select>
        <div className="filter-btn">
            <button type="button" onClick={handleSearch} className="btn-filter">Filter</button>
        </div>
        </div>
        
        
       {/* <span>Category: </span> */}
        
        
    </div>
  )
}

export default Filter