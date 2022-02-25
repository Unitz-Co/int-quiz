import React, { memo, useMemo } from "react";
import noImage from "../../assets/no-image.png";
import { HORIZONTAL_MODE, VERTICAL_MODE } from "../../configs";
import styles from "./Advisors.module.css";

const Advisors = ({ data, mode = VERTICAL_MODE }) => {

  const content = useMemo(() => {
    switch (mode) {
      case VERTICAL_MODE:
        return <AdvisorVertical data={data} />;
      case HORIZONTAL_MODE:
        return <AdvisorHorizontal data={data} />;
      default:
        return <div></div>;
    }
  }, [mode, data]);

  return <>{content}</>;
};

export default memo(Advisors);

const AdvisorVertical = ({ data }) => {
  return (
    <div className={styles.vertical}>
      {data && data?.length ? (
        data.map((item, index) => (
          <div key={index} className={styles.itemVerticalWrapper}>
            <div className={styles.avatar}>
              <div
                style={{
                  backgroundImage: `url(${item?.avatarUrl?.url ?? noImage})`
                }}
              />
            </div>
            <span className={styles.text}>{item?.displayName}</span>
            <span className={styles.text}>{item?.email}</span>
            <span className={styles.text}>{item?.phone}</span>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

const AdvisorHorizontal = ({ data }) => {
  return (
    <div className={styles.horizontal}>
      {data && data?.length
        ? data.map((item, index) => (
            <div key={index} className={styles.itemHorizontalWrapper}>
              <div>
                <div className={styles.avatar}>
                  <div
                    style={{
                      backgroundImage: `url(${item?.avatarUrl?.url ?? noImage})`
                    }}
                  />
                </div>
                <span className={styles.text}>{item?.displayName}</span>
                <span className={styles.text}>{item?.email}</span>
                <span className={styles.text}>{item?.phone}</span>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
