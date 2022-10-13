
import { useEffect, useState } from 'react';
import style from '../scss/App.module.scss';
import ListUser from './listuser/ListUser';
import {listUser} from '../data/convertData';
import Fillter from './fillter/Fillter';
import { connect } from 'react-redux';
import Display from './display/Display';


function App({getState,getStateStatus, getStateName, getStateCate}) {
  // console.log('App.js',getState)
  const [list, setList] = useState(listUser)

  const filterStatus = (status = 'all', listUser = []) => {
    if(status === 'all') return listUser;
    return listUser.filter(value => value.status === status)
  }

  const filterName = (name, listUser = []) => {
    return  listUser.filter(user => {
        return user.displayName.toLowerCase().search(name.trim()) >= 0
    
    }); 
  }

  const filterCate = (cate, listUser = []) => {
      if(cate === 'all') return listUser 
      if(cate === 'more...') 
          return listUser.filter(user => {
            return !user.categoriesCollection.items.find(item => 
                item.displayName.toLowerCase().trim() !== cate.toLowerCase().trim())
          })
      return listUser.filter(user => {
          return user.categoriesCollection.items.find(item => 
              item.displayName.toLowerCase().trim() === cate.toLowerCase().trim())
      })
  }
  const searchFC =  () => {
    let listFilter = [];
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        listFilter = filterStatus(getStateStatus, listUser);
        listFilter = filterName(getStateName, listFilter)
        listFilter = filterCate(getStateCate, listFilter)
        if(listFilter.length > 0) resolve();
        else reject();
      }, 0)
      
    })
    myPromise.then(res => setList(listFilter)).catch(() => setList(listFilter));
    // listFilter = filterStatus(getStateStatus, listUser);
    // listFilter = filterName(getStateName, listFilter)
    // listFilter = filterCate(getStateCate, listFilter)
    // setList(listFilter);
  }

  useEffect(() => {
    searchFC();
   
  }, [getStateStatus, getStateName, getStateCate])


  return (<div className={style.App}>
      {/* <Display></Display> */}
      <Fillter searchFC={searchFC}></Fillter>
      <ListUser listUser={list}></ListUser>
  </div>
  );
}

const mapState = (state) => {
  return {
    getStateStatus: state.status,
    getStateName: state.name,
    getStateCate: state.category,
    getState: state,
  }
}

export default connect(mapState)(App);
