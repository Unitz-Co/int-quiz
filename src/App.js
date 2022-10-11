
import './App.scss';
import data from './data/data.json'
import { useState } from "react";
import { Avatar, Button, Card, List, Select, Switch, Radio, Modal } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import Slider from "react-slick";
import Search from 'antd/lib/input/Search';
import ExtraList from './Component/ExtraList';
import { RightOutlined, LeftOutlined, RetweetOutlined, InfoCircleFilled, InfoCircleTwoTone } from '@ant-design/icons';
function App() {

  const [listAd, setListAd] = useState(data.data.advisorProfileCollection.items)
  const [view, setView] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedAd, setSelectedAd] = useState({})
  const [selectedItems, setSelectedItems] = useState([]);

  const nullImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <RightOutlined />,
    prevArrow: <LeftOutlined />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const optionCategories = ["Tư vấn tâm lý", "Xem phong thủy", "Tư vấn hôn nhân gia đình", "Hon nhan va gia dinh", "Xem tướng học", "xem chỉ tay"]
  const filteredOptions = optionCategories.filter((o) => !selectedItems.includes(o));

  const onSearch = (e) => {
    const temp = data.data.advisorProfileCollection.items.filter(value => {
      let arr = []
      value.categoriesCollection.items.forEach(item => arr.push(item.displayName))
      arr = [...new Set(arr)]
      return (
        (value.displayName.toLowerCase().includes(e.toLowerCase()))
        &&
        (arr.some(r => selectedItems.indexOf(r) >= 0))
      )
    })
    setListAd(temp)
  }

  const changeViewStatus = (e) => {
    switch (e) {
      case "onl":
        const temp = data.data.advisorProfileCollection.items.filter(item => item.online === true)
        setListAd(temp)
        break
      case "off":
        const temp1 = data.data.advisorProfileCollection.items.filter(item => item.online === false)
        setListAd(temp1)
        break
      default: setListAd(data.data.advisorProfileCollection.items)
    }
  }

  const selectAd = (value) => {
    setSelectedAd(value)
    setIsModalOpen(true)
  }

  return (
    <div className="App">
      <div className='action'>
        <div className='filter'>
          <Select
            mode="multiple"
            placeholder="Filter by categories"
            value={selectedItems}
            onChange={setSelectedItems}
            style={{
              width: '100%',
            }}
          >
            {filteredOptions.map((item) => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
          <Search placeholder="Search by name" onSearch={e => onSearch(e)} enterButton className='search' />
          <Button
            type="primary"
            icon={<RetweetOutlined />}
            onClick={() => setListAd(data.data.advisorProfileCollection.items)}
          >
            Reset
          </Button>
          <Radio.Group
            defaultValue="all"
            buttonStyle="solid"
            style={{
              display: "flex", marginLeft: "50px"
            }}
            onChange={e => changeViewStatus(e.target.value)}>
            <Radio.Button value="onl">Online</Radio.Button>
            <Radio.Button value="off">Offline</Radio.Button>
            <Radio.Button value="all">All</Radio.Button>
          </Radio.Group>
        </div>
        <Switch
          checkedChildren={"Vertical"}
          unCheckedChildren={"Horizontal"}
          defaultChecked
          className='switch'
          onChange={e => setView(e)}
        />
      </div>
      <Modal
        title={selectedAd.displayName}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        width={350}
      >

        <div className='information' >
          <Avatar
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 64,
              xl: 80,
              xxl: 100,
            }}
            src={selectedAd.avatarUrl?.url || nullImage}
          />
          <div className='information-detail'>
            <p>Email: {selectedAd.email}</p>
            <p>Phone: {selectedAd.phone}</p>
            <p>Status: {selectedAd.online ? <InfoCircleTwoTone twoToneColor="#52c41a" /> : <InfoCircleFilled />}</p>
          </div>
        </div>
        <p>Categories</p>
        <ExtraList item={selectedAd.categoriesCollection.items} ></ExtraList>
        <p>Skill</p>
        <ExtraList item={selectedAd.skillsCollection.items} ></ExtraList>
        <p>Services</p>
        <ExtraList item={selectedAd.servicesCollection.items} ></ExtraList>
      </Modal>
      {view
        ?
        <>
          <List.Item
            extra={<div className='list-extra-header'>
              <p>Categories</p>
              <p>Skills</p>
              <p>Services</p>
            </div>}
          >

          </List.Item>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {

              },
              pageSize: 7,
            }}
            dataSource={listAd}
            renderItem={(item) => (
              <List.Item
                key={item.title}
                onClick={() => selectAd(item)}
                actions={[

                ]}
                extra={
                  <div className='list-extra'>
                    <ExtraList item={item.categoriesCollection.items} ></ExtraList>
                    <ExtraList item={item.skillsCollection.items} ></ExtraList>
                    <ExtraList item={item.servicesCollection.items} ></ExtraList>

                  </div>
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatarUrl?.url || nullImage} />}
                  title={<a>{item.displayName}</a>}
                  description={<>
                    <p>{item.email}</p>
                    <p> {item.online ? <span><InfoCircleTwoTone twoToneColor="#52c41a" /> Online</span> : <span><InfoCircleFilled /> Offline</span>}</p>
                  </>}
                />
                {item.content}
              </List.Item>
            )
            }
          />
        </>
        :
        <Slider  {...settings}>
          {
            listAd.map(item => {
              return (
                <div>
                  <Card
                    hoverable
                    className='card'
                    onClick={() => selectAd(item)}
                    cover={<img alt={item.avatarUrl?.title} src={item.avatarUrl?.url || nullImage} />}
                  >
                    <Meta
                      title={item.displayName}
                      description={<div>
                        <p>Email: {item.email}</p>
                        <p>Phone: {item.phone}</p>
                        <p>Status: {item.online ? <InfoCircleTwoTone twoToneColor="#52c41a" /> : <InfoCircleFilled />}</p>
                      </div>} />
                  </Card>
                </div>
              )

            })
          }
        </Slider>
      }

    </div >
  );
}

export default App;
