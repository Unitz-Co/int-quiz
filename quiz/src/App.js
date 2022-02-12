import React, { useState } from "react";
import "./App.css";
import { advisorsData } from "./components/data/advisors";
import PersonList from "./components/Person/PersonList";
import Filter from "./components/FilterForm/Filter";

const FULL_LIST = advisorsData[0].data.advisorProfileCollection.items;
const VERTICAL = 'vertical'
const HORIZONTAL = 'horizontal'
const App = () => {
  console.log('APP RUNNING')
  const [list, setFilteredList] = useState(FULL_LIST);
  const [order, setOrderView] = useState(VERTICAL)
  

  const onSearch = (name, category) => {
    console.log("SEARCH")
    // console.log(name, category);
    let flag
    const filteredNameList = FULL_LIST.filter( person => person.displayName.includes(name)) //remember UPPER/LOWER case convert
    // console.log("filteredNameList.length = ",filteredNameList.length)
    for (let i = 0; i < filteredNameList.length; i++) {
      const record = filteredNameList[i];
      for (let j=0; j < record.categoriesCollection.items.length;j++){
        const categories = record.categoriesCollection.items[j]
        // console.log("categories.displayName = ",categories.displayName)
        if(categories.displayName.includes(category)){
          flag = true
          break
        }
      }
      if(flag===true){
        setFilteredList(filteredNameList)
        break
      }
    }
    if(!flag){
      setFilteredList(null)
    }
  };
  const onRestoreDefault = () =>{
    console.log("restore default")
    setFilteredList(FULL_LIST)
  }
  const onSwitchView = () =>{
    console.log('On switch view',list)
    // if(order===VERTICAL){
    //   setOrderView(HORIZONTAL)
    // }
    // else{
    //   setOrderView(VERTICAL)
    // }
    setOrderView(prevOrder => {
      console.log("????????")
      if(prevOrder===VERTICAL){
        return HORIZONTAL
      }
      else{
        return VERTICAL
      }
    })
  }
  return (
    <React.Fragment>
      <h1 align="center">Information about advisors</h1>
      <Filter onSearch={onSearch} restoreDefault={onRestoreDefault} onSwitchView={onSwitchView}></Filter>
      <PersonList list={list} order={order}></PersonList>
    </React.Fragment>
  );
};

export default App;
