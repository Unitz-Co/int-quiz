import { status as  valueStatus} from "../../../data/convertData";
import style from './status.module.scss'

export default function Status({status}) {

    return (<div className={style.status}>
        {status === valueStatus.online ?
            <div className={style.online}>
                <div className={style.show}> {status}</div>
            </div>
            
        :
            <div className={style.offline}>
                 <div className={style.show}> {status}</div>
            </div>
        }
    </div>)
}