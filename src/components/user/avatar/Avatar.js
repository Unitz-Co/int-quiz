import style from './avatar.module.scss'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Avatar({title, url}) {
    
        return (<div className={style.avatar}>
            <p> {title} </p>
            <img src={url}></img>
        </div>)
   
}