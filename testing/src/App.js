import React,{useEffect, useRef,useState} from 'react'
import './App.css';
import Filter from './components/filter/Filter';
import List from './components/List/List';
import Data from './data1.json'
function App() {
  const data = Data.data.advisorProfileCollection.items
  const listRef = useRef(null)
    const [filter,setFilter] = useState({
        name:'',
        category:'',
        status:''
    })
   const [list,setList] = useState([])
   useEffect(()=>{
    const fetData = ()=>{
      if(filter.name === '' && filter.category==='' && filter.status===''){
        setList(data)
      }else{
        const newData = data.filter((da)=> da.displayName.toLocaleLowerCase().includes((filter.name)) && da.status === filter.status)
        setList(newData)
      }
    }
    fetData()
   },[filter.name,data,filter.category,filter.status])
   useEffect(()=>{
    const getData = ()=>{
      if(filter.name==='' && filter.category===''){
        setList(data)
      }else{
        data.forEach((da)=>{
          da.categoriesCollection.items.forEach((item)=>{
            if(item.displayName.includes(filter.category)){
              console.log('co')
            }else{
              console.log('khong')
            }
          })
        })
      }
      
    }
    getData()
   },[data,filter.name,filter.category])

  const handleClick = ()=>{
    listRef.current.classList.toggle('active')
  }
  return (
    <div className="App">
      <div className="App_container">
        <Filter setFilter={setFilter}/>
        
        <div className="list_container" >
        <button type="button" onClick={handleClick} className="btn">&#9781;</button>
          <div className="list_contain" ref={listRef}>
            {
              list.map((item)=>{
                return(
                  <List Data={item} key={item.sys.id}/>
                )
              })
            }
          </div>
          
        </div>
        
      </div>
     
    </div>
  );
}

export default App;
