import React, {useState, useRef} from 'react';
import datajson from './data/data.json'
import 'antd/dist/antd.css'
import { Tag, Input} from 'antd'
const {Search} = Input
const mapavatarUrl=(item)=>{
  if(item.avatarUrl === null)
  {
    return(
      <img  style={{borderRadius:"7%"}} src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg" width="100%" height="300" alt="img"></img>)
  }
  else
  {
    return(
      <img style={{borderRadius:"7%", overflow:"hidden"}} src={item.avatarUrl.url} width="100%" height="300" alt="img"></img>)
  }
} 

const categories=(item)=>{
  let items = item.categoriesCollection.items
  if(items.length === 0){
    return(
      <p>
          <Tag color="red">Không có</Tag>
      </p>)
  }
  else{
    const render = items.map((i, index)=>{
      return(
        <p key={index}>
          <Tag color="green">{i.displayName}</Tag>
        </p>)
      })
    return render
  }
}

const App = () => {
 
  const originData=datajson.data.advisorProfileCollection.items
  const inputText = useRef()
  const  [Display, setDisplay] = useState("row")
  const [data, setData]=useState(originData)
  
  const handleSearch=(e)=>{
    let searchCategory= []
    if(e !== "")
    {
      const searchName = originData.filter(item => item.displayName === e)
      const filterCategory = originData.map(item=>item.categoriesCollection.items.filter(i=>i.displayName === e))
      
      for (var i = 0 ; i < filterCategory.length; i++)
      {  
        if(filterCategory[i].length !==0)
          searchCategory.push(i)
      }
      
      if(searchName.length!==0 )
      {
        console.log(searchName)
        setData(searchName)
      } 
      
      if(searchCategory.length !== 0)
      {
          var array = []
          searchCategory.map((item)=>array.push(originData[item]))
          setData(array)
      }

      if(searchName.length === 0 || searchCategory.length === 0 )
          setData([])
    }
    
    if(e === "")
       setData(originData)    
  }

  const handleFilterOnline=()=>{
    const filterItems = originData.filter(i=>i.status === "online")
    setData(filterItems)
  }

  const handleFilterOffline=()=>{
    const filterItems = originData.filter(i=>i.status === "offline")
    setData(filterItems)
  }
  const items = data.map((item, index)=>{
    return(
      <div key={index} style={{borderRadius:"7%", width:"30%", marginLeft:"1.6%", marginRight:"1.6%", marginBottom:"1.6%"}}>
        <div>
          {mapavatarUrl(item)}
        </div>
        
        <div style={{ borderStyle:"groove", marginTop:"5%",  height:"250px"}}>
          <p><span>Trạng thái: </span> 
            {item.status === "online"?
            <Tag color="green">{item.status}</Tag>
            :
            <Tag color="red"> {item.status}</Tag>
            }
          </p>
          <p>Name: {item.displayName}</p>
          <p>Email: {item.email}</p>
          <p>Phone: {item.phone}</p> 
          <div>
            <p>Nghề nghiệp:</p>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                {categories(item)}  
            </div>          
          </div>
        </div>

      </div>
    )
  })

  return( 
    <div className="container" style={{height:"100%"}}>
      <div className="row">
        <div className="dropdown col col-sm-1" style={{marginLeft:"1.6%", marginTop:"2%"}}>
          <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Display
          </button>
          
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item" href="#" onClick={()=>setDisplay("row")}>Horizontal</button>
            <button className="dropdown-item" href="#" onClick={()=>setDisplay("column")}>Vertical</button>
          </div>
        </div>
        
        <div className="dropdown col col-sm-6" style={{marginTop:"2%"}}>
          <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter
          </button>
          
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item" href="#" onClick={handleFilterOnline}>Online</button>
            <button className="dropdown-item" href="#"  onClick={handleFilterOffline}>Offline</button>
          </div>
        </div>        
        
        <Search ref={inputText} className="col col-sm-4"  style={{marginLeft:"1.6%", marginTop:"2%"}} onSearch={handleSearch} placeholder="Input your search text" enterButton="Search"/>
      </div>
      
      { data === "" ?
        <div style={{justifyContent:"center", alignItems:"center", display:"flex", height:"100%"}}>Thông tin bạn nhập không thể tìm thấy!</div>
      :
        <div style={{flexDirection:`${Display}`, alignItems:"center", display:"flex", flexWrap:"wrap", marginTop:"2%",}} >
          {items}
        </div>
      }
      
    </div>
    
  );
}

export default App;
