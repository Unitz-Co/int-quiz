import Status from "./Status";
import style from './fillter.module.scss'
import Name from "./Name";
import Category from "./Category";
import Display from "../display/Display";


function Fillter({searchFC }) {
    const handleSearch = (e) => {
        searchFC();
    }

    return (<div className={style.fillter}>
        <Name></Name>
        <Category></Category>
        <Status></Status>

        <div className={style.box}>
            <Display></Display>
            <button onClick={handleSearch}>Search</button>
        </div>
       
    </div>)
} 


export default Fillter;