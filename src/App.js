import React, { useEffect, useState } from 'react';
import { Row, Col, Select, Input } from 'antd'
import './App.css'
import data from './Data/data.json'
import _ from 'lodash'



const { Option } = Select;
const { Search } = Input;

const displayData = ['horizontal', 'vertical'];
const accessData = ['all', 'online', 'offline'];
const SearchColection = ['Name', 'Category']

function App() {

  const dataInit = data.data.advisorProfileCollection
  const [listPerson, setListPerson] = useState(dataInit.items)
  const [display, setDisplay] = useState(displayData[0])
  const [access, setAccess] = useState(accessData[0])
  const [searchBy, setsearchBy] = useState(SearchColection[0])

  useEffect(() => {
    console.log('useEffect', access)
    showAccess()
  }, [access])

  const onSearch = (value) => {
    console.log('listPerson', listPerson)
    let newListPerson = {}
    if (searchBy === 'Name') {

      let searchByName = str => dataInit.items.filter(({ displayName }) => displayName.toLowerCase().includes(str.toLowerCase()))
      newListPerson = searchByName(value)
    } else {
      let searchByCategory = str => dataInit.items.filter((item, index) => {
        for (let category of item.categoriesCollection.items) {
          if (category.displayName.toLowerCase().includes(str.toLowerCase())) {

            return true
            break;
          }


        }

      }

      )
      newListPerson = searchByCategory(value)



    }

    setListPerson(newListPerson)
  };

  const onDisplayChange = (value) => {
    setDisplay(value);
  };
  const showAccess = () => {
    let newListPerson = {}
    if (access === "all") {
      newListPerson = dataInit.items
    } else {

      newListPerson = dataInit.items.filter(({ status }) => {

        return status === access
      })
    }
    setListPerson(newListPerson);
  }
  const onAccessChange = (value) => {

    setAccess(value);




  };
  const onFilter = (value) => {


    console.log("onfilter")


    setsearchBy(value);
  }
  const color = (status) => {
    if (status === 'online') {
      return 'green';
    } else {
      return 'gray';
    }
  }
  const renderPersonDetail = () => {
    return listPerson.map((person, index) => {
      if (display === "horizontal") {
        return <Col className='' key={index}
          xs={24}
          sm={12}
          md={12}
          lg={12}
          xl={8}
        >
          <div className='p-4 m-3 dark:bg-gray-300 dark:text-gray-100' style={{ borderRadius: "10px", margin: "0 auto", minHeight: 240 }}>

            <div className="cardPerson max-w-md  sm:flex sm:space-x-6 dark:bg-gray-300 dark:text-gray-100" style={{ borderRadius: "10px", margin: "0 auto" }}>
              <div className="cardPerson_image flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                <img src={person.avatarUrl ? person.avatarUrl.url : 'https://picsum.photos/300/300'} alt={person.displayName} className="object-cover object-center  rounded dark:bg-gray-500" onError={e => { e.target.onerror = null; e.target.src = 'https://picsum.photos/300/300'; }} />
              </div>
              <div className="flex flex-col space-y-4">

                <div className='cardContent' style={{ minHeight: 130 }}>
                  <h2 className="text-2xl font-semibold">{person.displayName} <span style={{ borderRadius: "50%", width: 10, height: 10, display: 'inline-block', backgroundColor: `${color(person.status)}` }}></span></h2>
                  {/* _.uniqBy(data, 'id'); */}
                  {_.uniqBy(person.categoriesCollection.items, 'displayName').map((item, index) => {
                    return <p key={index} className="mb-0 text-sm dark:text-gray-600">- {item.displayName}</p>

                  })}

                </div>
                <div className="space-y-1">
                  <span className="flex items-center space-x-2">

                    <span className="dark:text-gray-500">{person.email}</span>
                  </span>
                  <span className="flex items-center space-x-2">

                    <span className="dark:text-gray-500">{person.phone}</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </Col >

      } else {
        return <div key={index} className="vertical dark:bg-gray-300 mb-5 w-100" style={{ minHeight: 100 }}>
          <div className="p-6 sm:p-12 dark:bg-gray-300 dark:text-gray-100">
            <div className="cardVertical flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
              <img src={person.avatarUrl ? person.avatarUrl.url : 'https://picsum.photos/300/300'} alt="" className="personImage ml-15 self-center flex-shrink-0 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" style={{ width: 250, height: 250 }} onError={e => { e.target.onerror = null; e.target.src = 'https://picsum.photos/300/300'; }} />
              <div className="flex flex-col personDetail">
                <h1 className="text-lg font-semibold text-center md:text-left mb-5">{person.displayName} <span style={{ borderRadius: "50%", width: 10, height: 10, display: 'inline-block', backgroundColor: `${color(person.status)}` }}></span></h1>
                {_.uniqBy(person.categoriesCollection.items, 'displayName').map((item, index) => {
                  return <p key={index} className=" text-sm dark:text-gray-600 text-center ngheNghiep">- {item.displayName}</p>

                })}
                <div className='servicesAndSkill flex justify-center'>
                  <div className='services'>
                    <h2>services: </h2>
                    <ul className='ml-5'>
                      {person.servicesCollection.items.map((item, index) => {
                        return <li key={index} className="text-black font-sans">{item.name}</li>
                      })}

                    </ul>
                  </div>
                  <div className='skills'>
                    <h2>skills: </h2>
                    <ul className='ml-5'>
                      {person.skillsCollection.items.map((item, index) => {
                        return <li key={index} className="text-black font-sans">{item.displayName}</li>
                      })}

                    </ul>
                  </div>
                </div>
                <div className='contact text-center'>
                  <a type='tel'><i class="fa fa-phone"></i> {person.phone}</a>
                  <a type='email'><i class="fa fa-envelope-open"></i> {person.email}</a>
                </div>
                <div className="socialIcons flex justify-center pt-4 space-x-4 align-center">
                  <a href='' className='hover:dark:text-violet-400'><i class="fab fa-github"></i></a>
                  <a href='' className='hover:dark:text-violet-400'><i class="fab fa-facebook"></i></a>
                  <a href='' className='hover:dark:text-violet-400'><i class="fab fa-twitter"></i></a>
                  <a href='' className='hover:dark:text-violet-400'><i class="fab fa-linkedin"></i></a>
                  <a href='' className='hover:dark:text-violet-400'><i class="fa fa-envelope"></i></a>



                </div>
              </div>
            </div>
          </div>
        </div >
      }

    })

  }
  return (
    <div className='' style={{ minHeight: '800px' }}>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: 250, background: 'url(./images/pattern.jpg)' }}>
      </div>
      <div className='container h-100 py-5' style={{ background: "#80808026", minHeight: "800px" }}>
        <div className='control flex align-items-center px-5'>
          <div className='searchControl flex align-items-center'>

            <p className='mb-0 mr-3'>Search by: </p>
            <Select
              className='ml-0'
              style={{
                width: 100,
              }}
              value={searchBy}
              onChange={onFilter}
            >
              {SearchColection.map((item, index) => (
                <Option key={index} value={item}>{item}</Option>
              ))}
            </Select>
            <Search className='ml-2 inputControl' placeholder="input search text" onSearch={onSearch} style={{ width: "auto" }} enterButton />
          </div>
          <div className='displayControl flex align-items-center ml-5'>

            <p className='displayText mb-0 ml-5'>Display: </p>
            <Select
              className='ml-3'
              style={{
                width: 150,
              }}
              value={display}
              onChange={onDisplayChange}
            >
              {displayData.map((item, index) => (
                <Option key={index} value={item}>{item}</Option>
              ))}
            </Select>
          </div>
          <div className='displayControl flex align-items-center ml-5'>

            <p className='displayText mb-0 ml-5'>Access: </p>
            <Select
              className='ml-3'
              style={{
                width: 150,
              }}
              value={access}
              onChange={onAccessChange}
            >
              {accessData.map((item, index) => (
                <Option key={index} value={item}>{item}</Option>
              ))}
            </Select>
          </div>
        </div>
        <hr className='my-5'></hr>
        <div >

          <Row align='middle'>
            {renderPersonDetail()}
          </Row>

        </div>
      </div>
    </div >
  );
}

export default App;
