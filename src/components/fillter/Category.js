import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setCategory } from "../../store/actions";
import style from './fillter.module.scss'

const getListCategory = ['all',
'Tư vấn tâm lý', 
'Xem phong thủy', 
'Tư vấn hôn nhân gia đình',
'Xem tướng học',
'Hon nhan va gia dinh',
'xem chỉ tay',
'Xem tướng học',
]

function Category ({setCategory}) {
  
    const [cate, setCate] = useState('all');

    const handleSelection = (e) => {
        setCate(e.target.value)
        // console.log(e.target.value);
    }
    useEffect(() => {   
        setCategory(cate)
    }, [cate])

    return (<div className={style.category}>
        <label>Filter by Category</label>
        <select onChange={handleSelection}>
            {getListCategory.map((value, index) => {
                return (<option key={index} value={value}>{value}</option>)
            })}
        </select>
    </div>)
}
const mapState = (state) => {
    return {
        getStateCategorry: state,
    }
}
const mapDispatch = (dispatch) => {
    return {
        setCategory: (value) => dispatch(setCategory(value)),
    }
}

export default connect(mapState, mapDispatch)(Category);