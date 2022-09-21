import Cate from "../Cate/Categori";
import Service from "../Service/Service";
import Skill from "../Skill/Skill";
import style from "./Item.module.css";

const Item = (props) => {
  const advisorName = props.data.displayName ? props.data.displayName : "null";
  const advisorEmail = props.data.email ? props.data.email : "null";
  const advisorPhone = props.data.phone ? props.data.phone : "null";

  return (
    <div className={style["item"]}>
      <img
        src={props.data.avatarUrl ? props.data.avatarUrl.url : "non-link"}
        alt={`${props.data.sys.id}-img`}
      />
      <div className={style["item-contents"]}>
        <h1>{advisorName}</h1>
        <div className={style["item-info"]}>
          <span>Email: {advisorEmail}</span>
          <span>Phone: {advisorPhone}</span>
          <Skill listSkill={props.data.skillsCollection.items} />
          <Service listService={props.data.servicesCollection.items} />
          <Cate categorieList={props.data.categoriesCollection.items} />
        </div>
      </div>
    </div>
  );
};

export default Item;
