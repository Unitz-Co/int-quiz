
import { useEffect, useState, React } from 'react';
import './App.scss';
import data from './data/data.json'

function App() {

  const advisors = data.data.advisorProfileCollection.items
  console.log(advisors)
  const [status, setStatus] = useState('all')
  const [filterAdvisors, setFilterAdvisors] = useState()
  const [searchWord, setSearchword] = useState('')
  useEffect(() => {
    let coppyAdvisors = [...advisors]
    let newAdvisors = []
    if (status === 'all') {
      newAdvisors = coppyAdvisors
    }
    if (status === 'online') {
      newAdvisors = coppyAdvisors.filter((item) => item.status === 'online')
    }
    if (status === 'offline') {
      newAdvisors = coppyAdvisors.filter((item) => item.status === 'offline')
    }

    let newFilter = newAdvisors.filter((item, index) => {
      return (removeVietnameseTones(item.displayName.toLowerCase()).includes(removeVietnameseTones(searchWord.toLowerCase())) ||
        item.categoriesCollection?.items?.find((cate) => removeVietnameseTones(cate.displayName.toLowerCase()).includes(removeVietnameseTones(searchWord.toLowerCase()))))
    })
    setFilterAdvisors(newFilter)
  }, [searchWord, status])


  function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    return str;
  }

  return (
    <div className="App">
      <div className='search-container form-group'>
        <input className='search-center' type="text"
          onChange={(e) => setSearchword(e.target.value)}
        />
        <div className="icon-glass" >
          <i> <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" /></svg> </i>
        </div>
      </div>
      <select className=' mt-3 select-status' value={status} onChange={e => setStatus(e.target.value)} >
        <option value="all"> All </option>
        <option value="online"> Online </option>
        <option value="offline"> Offline </option>
      </select>
      <div className="row">
        {filterAdvisors && filterAdvisors.length > 0 ? filterAdvisors.map((item, index) => {
          return (
            <div key={index} className="advisors-container col-6 col-xl-3 col-md-3 ">
              <div style={{ backgroundImage: `url(${item.avatarUrl?.url || 'https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc='})` }} className="avatar">
              </div>
              <div className="status"> <div className={item.status === 'online' ? 'display-online' : 'display-offline'}></div> {item.status} </div>
              <div className="displayName">
                <span>Name:</span>  {item.displayName}
              </div>
              <div className="email">
                <span> Email:</span>  {item.email}
              </div>
              <div className="phone">
                <span>Phone:</span> {item.phone}
              </div>
              <div className="category">
                <span> Categories:</span>  {item.categoriesCollection?.items?.map((x, y) => y !== 0 ? ', ' + x.displayName : x.displayName)}
              </div>
              <div className="servicesCollection">
                <span>Services:</span>   {item.servicesCollection?.items?.map((x, y) => y !== 0 ? ', ' + x.name : x.name)}
              </div>
              <div className="servicesCollection">
                <span>Skills:</span>    {item.skillsCollection?.items?.map((x, y) => y !== 0 ? ', ' + x.displayName : x.displayName)}
              </div>
            </div>
          )
        })
          :
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            No results found</div>
        }
      </div>
    </div>
  );
}

export default App;
