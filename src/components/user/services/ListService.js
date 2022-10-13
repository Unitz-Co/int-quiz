import style from './listService.module.scss'

const Service = ({service}) => {
    return (<div>
        <p> {service?.name} </p>
    </div>)
}

export default function ListService({listService = []}) {
   

    return (<div className={style.listService}>
        <strong>LIST SERVICE</strong>
        {  listService.length !== 0 ? 
                listService.map(value => {
                    return (<Service key = {value.id} service = {value}></Service>)
                })
           :
           <p> No service... </p>
        }
    </div>)
}