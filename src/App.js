import React, { useState } from 'react'
import styled from 'styled-components'
import { FaTh, FaThList, FaCircle } from 'react-icons/fa'
import { SearchOutlined } from '@ant-design/icons';
import GridView from './components/ListView'
import ListView from './components/GridView'
import { Input } from 'antd';
import 'antd/dist/antd.css';

const App = () => {

  const [viewdata, setViewData] = useState(true);
  const [textSearch, setTextSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  return (
    <Wrapper>
      <div className='section-center'>
        <div className='header'>
          <ul className='nav'>
            <li className={`${viewdata ? 'active grid-view' : 'grid-view'}`}>
              <FaTh onClick={(e) => { setViewData(true) }} />
            </li>
            <li className={`${!viewdata ? 'active grid-view' : 'grid-view'}`}>
              <FaThList onClick={(e) => { setViewData(false) }} />
            </li>
            <li className='status-online'>
              <FaCircle onClick={(e) => { setFilterStatus('online') }} /> Online
            </li>
            <li>
              <FaCircle onClick={(e) => { setFilterStatus('offline') }} /> Offline
            </li>
          </ul>
        </div>
        <Input
          style={{ marginBottom: 20, width: '50%' }}
          placeholder="Search.."
          prefix={<SearchOutlined />}
          onChange={(e) => {
            console.log('e.target.value ', e.target.value);
            setTextSearch(e.target.value);
          }}
        />
        {
          viewdata
            ?
            <ListView textSearch={textSearch} filterStatus={filterStatus} />
            :
            <GridView textSearch={textSearch} filterStatus={filterStatus} />
        }
      </div>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.section`
  margin: 8rem 0;
  padding: 4rem 0;
  .header {
    display: flex;
    height: 3em;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px
  }
  .nav {
    display: flex;
    align-items: center;
    grid-gap: 1rem;
    margin: 0 1rem;
    font-size: 2rem
  }
  .nav svg {
    cursor: pointer;
  }
  .nav .active {
    transition: var(--transition);
    color: var(--clr-gold);
  } 
  .nav .status-online {
    transition: var(--transition);
    color: var(--green);
  } 
`
