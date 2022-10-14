import { useEffect, useState } from "react"
import style from './fillter.module.scss'
import { connect } from "react-redux";
import { setStatus } from "../../store/actions";

 function Status({setStatus}) {
    const [status, setS] = useState('all');

    const handleStatus = (e) => {
        setS(e.target.value)
    }
    useEffect(() => {
        // console.log(status)
        setStatus(status)
    },[status])

    return (<div className={style.status}>
       <label>Filter by status</label>
       <span>
            <input type='radio' name="fav_language" value='all' onClick={handleStatus}></input>
            <label > all</label>
            <input type='radio' name="fav_language" value='offline' onClick={handleStatus}></input>
            <label > offline</label>
            <input type='radio' name="fav_language" value='online' onClick={handleStatus}></input>
            <label > online</label>
       </span>
         
    </div>) 
}

const mapState = (state) => ({
    status: state.status,
})
const mapDispatch = (dispatch) => ({
    setStatus: (value) => dispatch(setStatus(value)),
})

export default connect(mapState, mapDispatch)(Status);