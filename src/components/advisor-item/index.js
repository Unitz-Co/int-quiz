import React from "react";
import styles from "./styles.scss";
import { get, isUndefined } from "lodash";
const AdvisorItem = ({ data, advisorSelected, onSelectAdvisor }) => {
  const avatarUrl = get(data, ["avatarUrl", "url"]);
  const isActive = get(data, "status") === "online" ? true : false;
  const isSelect = data === advisorSelected ? true : false;
  return (
    <div
      className={
        isSelect ? `${styles.container} ${styles.selected}` : styles.container
      }
      onClick={() => onSelectAdvisor(data)}
    >
      <div className={styles.imageContent}>
        <img
          src={
            isUndefined(avatarUrl)
              ? "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
              : avatarUrl
          }
          width="100%"
        />
        <div
          className={styles.activeStatus}
          style={{ background: isActive ? "#41c5ad" : "#999" }}
        ></div>
      </div>
      <div className={styles.infoContent}>
        <span
          className={styles.text}
          style={{ fontWeight: "600", fontSize: "16px" }}
        >
          {get(data, "displayName")}
        </span>
        <span className={styles.text}>{get(data, "email")}</span>
        <span className={styles.text}>{get(data, "phone")}</span>
      </div>
    </div>
  );
};
export default AdvisorItem;
