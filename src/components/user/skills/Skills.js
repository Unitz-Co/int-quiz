import style from './skills.module.scss'

const Skill = ({skill}) => {
    return (<div className={style.skill}>
        <p> {skill?.displayName} </p>
    </div>)
}

export default function Skills({skills =[]}) {

    return(<div className={style.skills}>
        <strong>SKILLS</strong>
        {skills.length !== 0 ? skills.map(value => {
            return (<Skill key={value.id} skill ={value}></Skill>)
        })
        :
        <p>No skills</p>
        }
    </div>)
}