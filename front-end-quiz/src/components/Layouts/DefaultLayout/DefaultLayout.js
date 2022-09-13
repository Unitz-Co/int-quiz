import "./DefaultLayout.scss";
import Sidebar from "../components/Sidebar/Sidebar";

function DefaultLayout({ children }) {
    return (<div className="default-wrapper">
        <Sidebar />
        <div className="content">
            {children}
        </div>
    </div>);
}

export default DefaultLayout;