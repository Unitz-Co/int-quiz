import React from "react";
import "./Advisor.css";
import df from "../../assets/df.png";

const Advisor = (item) => {
  const it = item.item;
  const categories = [
    ...new Set(it.categoriesCollection.items.map((c) => c.displayName)),
  ];
  return (
    <div className="card">
      <div className="flex">
        <div className="card-avatar">
          <img src={it.avatarUrl != null ? it.avatarUrl.url : df}></img>
          <div
            className={it.online ? "card-status online" : "card-status offline"}
          />
        </div>
        <div>
          <h3>{it.displayName}</h3>
          <div className="card-contact">
            {it.email != null ? <p className="mr-2">✉ {it.email}</p> : <></>}
            {it.phone != null ? <p>✆ {it.phone}</p> : <></>}
          </div>
        </div>
      </div>

      <div className="card-info">
        <div className="card-info-i gray">
          <h5>Categories</h5>
          {categories.map((c, i) => {
            return (
              <p key={i} className="s">
                {c}
              </p>
            );
          })}
        </div>
        <div className="card-info-i green">
          <h5>Services</h5>
          {it.servicesCollection.items.map((c, i) => {
            return (
              <p key={i} className="s">
                {c.name}
              </p>
            );
          })}
        </div>
        <div className="card-info-i yellow">
          <h5>Skills</h5>
          {it.skillsCollection.items.map((c, i) => {
            return (
              <p key={i} className="s">
                {c.displayName}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Advisor;
