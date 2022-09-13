import './Sidebar.scss';
import { ReactComponent as Logo } from "../../../../assets/Logo.svg";
import { MdSupervisedUserCircle } from "react-icons/md"

function Sidebar() {
    return (<div className="sidebar-wrapper">
        <div className="logo">
            <Logo />
            <div className="logo-name">Unitz</div>
        </div>
        <div className="advisors">
            <MdSupervisedUserCircle className="advisors-logo" />
            <div className="advisors-name">Advisors</div>
        </div>
        <small>Coded by Nam Huỳnh<br/>hqnam.it@gmail.com</small>
    </div>);
}

export default Sidebar;