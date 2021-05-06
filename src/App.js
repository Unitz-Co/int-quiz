import './App.css'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import CardItem from './components/CardItem'
import { useViewMode } from './useViewMode'
import Toggle from './components/Toggle'

function App() {
  const JSON_DATA = './data.json'
  const [dataList, setDataList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [mode , toggleMode] = useViewMode()
  const [filteredUser, setFilteredUser] = useState([]);
  const viewMode = mode === 'horizontal' ? 'vertical' : 'horizontal'

  const getData = () => {
    fetch(JSON_DATA,
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then((response) => response.json())
      .then((json) => {
        setDataList(json.data.advisorProfileCollection.items)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  const nullToString = (value) => {
    return value == null ? "" : value.toString()
  }

  useEffect(() => {
    const excludeColumns = ["displayName", "categoriesCollection", "is_status"]
    const filteredData = dataList.filter(item => {
      return Object.keys(item).some(key => {
        if (!excludeColumns.includes(key)) {
          return false
        }
        if (key === 'categoriesCollection') {
          return item[key].items.some(category => {
            return nullToString(category.displayName).toLowerCase().includes(searchTerm.toLowerCase())
          })
        }
        return nullToString(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
      })
    })
    setFilteredUser(filteredData)
  }, [searchTerm, dataList])
     
  return (
    <div className="card-grid">
    { <Container className="card-grid__container">
        <div className="card-grid__header">
          <h2 className="card-grid__title">Advisors</h2>
        </div>
          <Row className="card-grid__filter">
            <div className="col-md-6 card-grid__search">
              <Row>
                <label htmlFor="input-search" className="col-sm-2 col-form-label">Search</label>
                <div className="col-sm-10">
                  <input type="text" value={ searchTerm } onChange={ e => setSearchTerm(e.target.value) } className="form-control" id="input-search" placeholder="Search by name and category" />
                </div>
              </Row>
            </div>
            <div className="col-md-4 card-grid__mode">
              <span className="me-2">View mode</span> 
              <Toggle mode={ viewMode } toggleMode={ toggleMode } />
            </div>
          </Row>
          <Row className= {mode === 'horizontal' ? 'card-grid__content' : 'card-grid__content vertical' }>
          {filteredUser && filteredUser.map((dataItem, index) => (
            <Col md={ viewMode === 'horizontal' ? 12 : 4 }>
              <CardItem
               key={ index }
               user={ dataItem }
               mode={ viewMode } />
            </Col>
          ))}
          </Row>
        </Container> }
      </div>
  )
}

export default App
