import Skills from "./skills";
import Service from "./Services";
import Cats from "./Cats";
import React from "react";
import "../style/render.css";
//import dateFormat from "dateformat";

export default function Advisor(props) {
  return (
    <div className="render_adv_item">
      <img
        className="adv_img"
        src={props.img != null ? props.img : ""}
        alt=""
      />
      <h2 className="render_adv_name">{props.name}</h2>
      <span
        className={`render_adv_status ${
          props.status === "online" ? "online" : "offline"
        }`}
      >
        {props.status === "online" ? "online" : "offline"}
      </span>
      <div className="adv_info basic">
        <div>
          <span className="bold">Email: </span>
          <span
            className={props.email != null && props.email != "" ? "" : "update"}
          >
            {props.email != null && props.email != ""
              ? props.email
              : "updating..."}
          </span>
        </div>
        <div>
          <span className="bold">Phone: </span>
          <span
            className={props.phone != null && props.phone != "" ? "" : "update"}
          >
            {props.phone != null && props.phone != ""
              ? props.phone
              : "updating..."}
          </span>
        </div>
        <div>
          <span className="bold">Date: </span>
          <span className={props.date}>
            {/* {dateFormat(props.date, "dd/mm/yy")} */}
          </span>
        </div>
      </div>
      <div className="adv_info plus">
        <div>
          <span className="bold">Skills: </span>
          <Skills skills={props.skills} />
        </div>
        <div>
          <span className="bold">Services: </span>
          <Service services={props.services} />
        </div>
      </div>
      <div className="advisors_cat">
        <Cats cats={props.cats} />
      </div>
    </div>
  );
}
