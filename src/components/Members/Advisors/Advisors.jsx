import React, {useEffect} from "react";
import style from "./Advisors.module.scss";
import cln from 'classnames';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";

const Advisors = ({ advisors }) => {
  console.log({advisors})

  return (
    <div className={style.advisors}>
      {advisors &&
        advisors.map((item) => {
          const categories = item.categoriesCollection.items
          const services = item.servicesCollection.items;
          const skills = item.skillsCollection.items
          return (
            <div className={style.itemAdvisor}>
              <div>
                <img src={item.avatarUrl.url} alt="" />
              </div>
              <div className={style.info}>
                <div className={style.groupName}>
                  <h3 className={style.name}>{item.displayName}</h3>
                <FontAwesomeIcon icon={faCircle} className={cln(style.icon, item.online === true ? style.iconOnline : style.iconOffline )} />
                </div>

                <p className={style.contact}>{item.email}</p>
                <p className={style.contact}>{item.phone}</p>
                <h5 className={style.titles}>Categories:</h5>
                {
                  categories.map((category)=>{
                    return(
                        <div className={style.list}>
                          <p>{category.displayName}</p>
                        </div>
                    )
                  })
                }
                <h5 className={style.titles}>Services:</h5>
                {services.map((service) => {
                  return(
                      <div className={style.list}>
                        <p>{service.name} </p>
                      </div>
                  );
                })}
                <h5 className={style.titles}>Skills:</h5>
                {skills.map((skill) => {
                  return (
                      <div className={style.list}>
                        <p>{skill.displayName} </p>
                      </div>
                  );
                })}

              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Advisors;
