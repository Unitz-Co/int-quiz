import { useState } from "react";
import './Filter.css'
import Button from "../Button/Button";
const Form = (props) => {
  const [enteredName,setEnteredName] = useState('')
  const [enteredCategory, setEnteredCategory] = useState('')
  const onChangeHandler = event =>{
    if(event.target.name==='Name'){
      setEnteredName(event.target.value)
    }
    if(event.target.name==='Category'){
      setEnteredCategory(event.target.value)
    }
    if(event.target.value===''){
      props.restoreDefault()
      return
    }
  }

  // const onCategoryChangeHandler = event =>{
  //   setEnteredCategory(event.target.value)
  //   if(event.target.value===''){
  //     props.restoreDefault()
  //     return
  //   }
  // }

  const onClearSearchFields = (event) =>{
    event.preventDefault()
    setEnteredName('')
    setEnteredCategory('')
    props.restoreDefault()
  }

  const searchHandler = (event) =>{
    event.preventDefault()
    props.onSearch(enteredName,enteredCategory)
  }
  
  const switchViewHandler = (event) =>{
    event.preventDefault()
    props.onSwitchView()
  }

  
  return (
    <form className='filter'>
      <div className="form">
        <div className="form-element">
          <label>Name</label>
          <input type="text" name="Name" value={enteredName}  onChange={onChangeHandler}></input>
        </div>
        <br></br>
        <div className="form-element">
          <label>Category</label>
          <input type="text" name="Category" value={enteredCategory}  onChange={onChangeHandler}></input>
        </div>
      </div>
      
      <br></br>
      <div className="buttons">
        <Button text='Search' onClick={searchHandler}></Button>
        <Button text='Clear' onClick={onClearSearchFields}></Button>
        <Button text='Switch View' onClick={switchViewHandler}></Button>
      </div>
    </form>
  );
};
export default Form;
// onSubmit={(event) => {
//   event.preventDefault();
//   props.onSearch(enteredName, enteredCategory);
// }}