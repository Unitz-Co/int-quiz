/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef } from 'react'
import { AiTwotonePlayCircle } from 'react-icons/ai'
import Category from '../Category/Category'
import Skill from '../Skill/Skill'
import Service from '../Service/Service'
import './style.css'


const Advisor = ({ items }) => {
  const [isVertical, setIsVertical] = useState(false)
  const [dataList, setDataList] = useState(items)
  const [status, setStatus] = useState(dataList)
  const inputRef = useRef()
  const [isChecked, setIsChecked] = useState(true)
  const onPressEnter = (event) => {
    if (event.key === "Enter") {
      handleOnClick()
    }
  }
  const handleOnClick = () => {
    const value = inputRef?.current.value.trim().toLowerCase()
    if (value === '') return setDataList(items);

    const new_list = items.filter(item => {
      if (item.displayName.toLowerCase().includes(value)) return true;
      if (item.categoriesCollection.items.some(category => category.displayName.toLowerCase().includes(value))) return true;
      return false;
    })
    setDataList(new_list)
    setStatus(new_list)
    setIsChecked(true)
  }
  const handleFilterAllList = () => {
    setDataList(status)
    setIsChecked(true)
  }
  const handleFliterOnlineList = () => {
    const new_list = status.filter(item => item.status === "online")
    setDataList(new_list)
    setIsChecked(false)
  }
  const handleFilterOfflineList = () => {
    const new_list = status.filter(item => item.status === "offline")
    setDataList(new_list)
    setIsChecked(false)
  }
  return (
    <>
      <div className="feature">
        <button className='change__view' onClick={() => setIsVertical(pre => !pre)}>{isVertical ? "Vertical" : "Horizontal"}</button>
        <div className='feature__search'>
          <input ref={inputRef} type="text" placeholder='Search' onKeyDown={onPressEnter} />
          <button className='btn__search' onClick={() => handleOnClick()}>Search</button>
        </div>
        <div className="feature__status">
          <input name='status' type="radio" onClick={handleFilterAllList} checked={isChecked} /> All
          <input name='status' type="radio" onClick={handleFliterOnlineList} /> Online
          <input name='status' type="radio" onClick={handleFilterOfflineList} /> Offline
        </div>
      </div>
      <div className={`${isVertical ? "list__item__horizontal" : "list__item__vertical"}`}>
        {dataList.length > 0 ?
          dataList.map((item, index) =>
            <div className='item' >
              <div className="item__img">
                {item?.avatarUrl?.url && <img key={index} src={item.avatarUrl.url}></img>}
              </div>
              <div className='item__content'>
                <div className='item__content__information'>
                  <h3>Thông tin</h3>
                  <div className='item__information__name'>Tên: {item.displayName}</div>
                  <div>Email: {item.email}</div>
                  <div>Sđt: {item.phone}</div>
                  <div className='item__status'>
                    <div className='item__status__title'>Status:</div>
                    {item?.status === 'online' ? <AiTwotonePlayCircle style={{ color: "green" }} /> : <AiTwotonePlayCircle style={{ color: "black" }} />}
                  </div>
                </div>
                  <div className='horizontal__list item__content__category'>
                    <h3>Doanh mục</h3>
                    <Category categories={item.categoriesCollection.items} />
                  </div>
                  <div className='horizontal__list item__content__skill'>
                    <h3>Kỹ năng</h3>
                    <Skill skills={item.skillsCollection.items} />
                  </div>
                  <div className='horizontal__list item__content__service'>
                    <h3>Dịch vụ</h3>
                    <Service services={item.servicesCollection.items} />
                  </div>
                </div>
            </div>
          ) : <div className='noData'>Không tìm thấy tên cố vấn hoặc doanh mục! Xin vui lòng nhập lại</div>
        }
      </div>
    </>
  )
}
export default Advisor