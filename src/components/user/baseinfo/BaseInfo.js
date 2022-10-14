import style from './baseInfo.module.scss'

export default function BaseInfo({baseInfo}) {
    
    return (<div className={style.baseInfo}>
        <strong>BASE INFO</strong>
        <p> {baseInfo?.displayName} </p>
        <p> {baseInfo?.phone ? baseInfo?.phone: 'not phone'}</p>
        <p> {baseInfo?.email ? baseInfo?.email: 'not email'} </p>
    </div>)
}