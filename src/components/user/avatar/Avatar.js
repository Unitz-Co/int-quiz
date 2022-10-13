import style from './avatar.module.scss'

export default function Avatar({title, url}) {
    return (<div className={style.avatar}>
        <p> {title} </p>
        <img src={url}></img>
    </div>)
}