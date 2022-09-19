import '../styles/advisors.css';
import Skills from './Skills';
import Services from './Services';
import Cats from './Cats';

export default function Advisors(props) {


    return (
        <div className="advisors_item">
            <img className="advisors_img" src={props.img != null ? props.img : "./avatar.jpg"} alt="avatar"/>
            <h2 className="advisors_name">{props.name}</h2> 
            <span className={`advisors_status ${props.status === 'online' ? 'online' : 'offline'}`}>
                {props.status === 'online' ? 'online' : 'offline'}
            </span>
            <div className="advisors_info basic">
                <div>
                    <span className="bold">Email: </span> 
                    <span className={props.email != null && props.email != "" ? '' : "update"}>
                        {props.email != null && props.email != "" ? props.email : "updating..."}
                    </span>
                </div>
                <div>
                    <span className="bold">Phone: </span>
                    <span className={props.phone != null && props.phone != "" ? '' : "update"}>
                        {props.phone != null && props.phone != "" ? props.phone : "updating..."}
                    </span>
                </div>
            </div>
            <div className="advisors_info plus">
                <div>
                    <span className="bold">Skills: </span>
                    <Skills skills={props.skills}/>
                </div>
                <div>
                    <span className="bold">Services: </span>
                    <Services services={props.services} />
                </div>
            </div>
            <div className="advisors_cat">
                <Cats cats={props.cats}/>
            </div>
        </div>
    )
}