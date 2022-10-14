import { connect } from "react-redux"
import { setView } from "../../store/actions"
// vertical and horizontal
import style from './display.module.scss'

function Display({view,setView}) {

    const handleDisplay = (va) => {
        if(view === 'vertical') setView('horizontal')
        if(view === 'horizontal') setView('vertical')
    }
    return (<div className={style.display}>
        <button onClick={handleDisplay} >Toggle Display</button>
    </div>)
}
const mapState = (state) => {
    return {
        view: state.view,
    }
}

const mapDispatch = (dispatch) => {
    return {
        setView: (value) => dispatch(setView(value))
    }
}

export default connect(mapState, mapDispatch)(Display);