import "./AdvisorList.scss";
import AdvisorCard from "../AdvisorCard/AdvisorCard";
import { v4 as uuidv4 } from 'uuid';

function AdvisorList({ listAdvisor = [], view = "hor", status = "all", searchInput = "" }) {
    let listAdvisorByStatus = listAdvisor;

    if (searchInput !== "") {
        listAdvisorByStatus = listAdvisor.filter(advisor => {
            // console.log(advisor);
            return (
                advisor.displayName.toLowerCase().includes(searchInput.toLowerCase()) ||
                advisor.categoriesCollection.items.some(category => {
                    return category.displayName.toLowerCase().includes(searchInput.toLowerCase());
                })
            );
        })
    }

    if (status === "online") {
        listAdvisorByStatus = listAdvisorByStatus.filter(advisor => {
            return advisor.status === "online";
        })
    } else if (status === "offline") {
        listAdvisorByStatus = listAdvisorByStatus.filter(advisor => {
            return advisor.status === "offline";
        })
    }



    return (
        <div className={view === "hor" ? "advisorlist-wrapper hor" : "advisorlist-wrapper ver"}>
            {listAdvisorByStatus.map(advisor => {
                return (<AdvisorCard key={uuidv4()} name={advisor.displayName} phone={advisor.phone} email={advisor.email} avt={advisor.avatarUrl} status={advisor.status} categories={advisor.categoriesCollection.items} view={view} />)
            })}
        </div>
    );
}

export default AdvisorList;