import React from "react";
import styles from "./styles.scss";
export default ({ data, title }) => {
  return (
    <div className={styles.renderInfoContainer}>
      <span className={styles.infoTitle}>{title}</span>
      {(data || []).map((item, index) => (
        <span className={styles.infoText} key={index}>
          {item.displayName}
        </span>
      ))}
    </div>
  );
};
