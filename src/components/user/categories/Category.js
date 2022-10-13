import style from './listCategory.module.scss'

const Avatar = ({avatar}) => {
    
    return (<div className={style.avatar}>
        <img src={avatar?.url}></img>
    </div>)
}

export default function Category({category}) {
    // console.log(category)
    return (<div className={style.category}>
        <Avatar avatar={category?.avatarUrl}> </Avatar>
        <p> {category?.displayName ? category?.displayName: '...not category'} </p>
    </div>)
}