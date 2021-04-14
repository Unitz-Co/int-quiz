import React from "react";
import styles from "./styles.scss";
import { get } from "lodash";
import RenderInfo from "./render-info";
export default ({ data }) => {
  const name = get(data, "displayName");
  const email = get(data, "email");
  const phone = get(data, "phone");
  const categoriesCollection = get(data, ["categoriesCollection", "items"]);
  const servicesCollection = get(data, ["servicesCollection", "items"]);
  const skillsCollection = get(data, ["skillsCollection", "items"]);
  return (
    <div className={styles.container}>
      <div className={styles.infoContent}>
        <span
          className={styles.text}
          style={{ fontSize: "24px", fontWeight: "700" }}
        >
          Basic info:
        </span>
        {name && <span className={styles.text}>Name: {name}</span>}
        {email && <span className={styles.text}>Email: {email}</span>}
        {phone && <span className={styles.text}>Phone: {phone}</span>}
      </div>
      <div className={styles.skillContent}>
        <span className={styles.text}>Categorys and Skills:</span>
        <div className={styles.content}>
          <RenderInfo data={categoriesCollection} title="categories" />
          <RenderInfo data={servicesCollection} title="services" />
          <RenderInfo data={skillsCollection} title="skills" />
        </div>
      </div>
    </div>
  );
};
