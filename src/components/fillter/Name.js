import { useEffect, useState } from "react"
import { connect } from "react-redux";
import { setName } from "../../store/actions";
import style from './fillter.module.scss'

function Name({setNameAction}) {
    const [inputName, setInputName] = useState('');
    const handleInputName = (e) => {
        setInputName(e.target.value)
    }
    useEffect(() => {
        setNameAction(inputName);
        // console.log(inputName);
    }, [inputName])

    return (<div className={style.name}>
        <label>Filter by name</label>
        <input placeholder="Enter name ... " value={inputName} onChange={handleInputName}></input>
    </div>)
}

// const mapState = (state) => {
//     return {
//         getStateName: state,
//     }
// }
const mapDispatch = (dispatch) => {
    return {
        setNameAction: (value) => dispatch(setName(value))
    }
}

export default connect(null, mapDispatch)(Name);
