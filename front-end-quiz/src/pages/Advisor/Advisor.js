import { useEffect, useState } from "react";
import ViewButton from "../../components/ViewButton/ViewButton";
import StatusButton from "../../components/StatusButton/StatusButton";
// import AdvisorCard from "../../components/AdvisorCard/AdvisorCard";
import DefaultLayout from "../../components/Layouts/DefaultLayout/DefaultLayout";
import data from "../../data/data.json";
import AdvisorList from "../../components/AdvisorList/AdvisorList";
import Search from "../../components/Search/Search";
import "./Advisor.scss"

function Advisor() {
    const [advisorList, setAdvisorList] = useState([]);
    const [view, setView] = useState("hor");
    const [status, setStatus] = useState("all");
    const [searchInput, setSearchInput] = useState("");


    function changeView(view) {
        setView(view);
    }

    function changeStatus(status) {
        setStatus(status);
    }

    function changeSearchInput(searchInput) {
        setSearchInput(searchInput);
    }

    // console.log("dashboard ", searchInput);
    //fetch data
    useEffect(() => {
        setAdvisorList(data.data.advisorProfileCollection.items)
    }, [])

    return (<div className="advisor-wrapper">
        <DefaultLayout>
            <ViewButton select={view} changeView={changeView} />
            <div className="search">
                <Search changeSearchInput={changeSearchInput} />
            </div>
            <StatusButton changeStatus={changeStatus} status={status} />
            <div className="advisorlist">
                <AdvisorList listAdvisor={advisorList} view={view} status={status} searchInput={searchInput} />
            </div>
            {/* <AdvisorCard/> */}
        </DefaultLayout>
    </div>);
}

export default Advisor;