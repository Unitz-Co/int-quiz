import "./AdvisorCard.scss";
import { v4 as uuidv4 } from 'uuid';

function AdvisorCard({
    name,
    phone,
    email,
    avt,
    status,
    categories,
    view = "hor" }) {
    if (avt === null) {
        avt = {};
        avt.url = "./images/no-image.png";
        avt.title = "noImage"
    }

    return (
        <div className={view === "hor" ? "advisorcard-wrapper hor" : "advisorcard-wrapper ver"}>
            <div className="info-container">
                <div className="avt">
                    {/* <img src={avt.url} alt={avt.title} /> */}
                    <img src={avt.url} alt={avt.title} />
                    <div className={status === "online" ? "status online" : "status"}></div>
                </div>
                <div className="info">
                    <div className="info-name">
                        {name}
                    </div>
                    <a href={`tel: ${phone}`} className="info-phone">
                        {phone}
                    </a>
                    <a href={`mailto: ${email}`} className="info-email">
                        {email}
                    </a>
                </div>
            </div>

            <div className="category">
                <div className="category-title">
                    CATEGORY
                </div>
                {categories.map(category => {
                    return <div className="category-tag" key={uuidv4()}>{category.displayName}</div>
                })}
            </div>
        </div>);
}

export default AdvisorCard;