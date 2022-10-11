import React from "react";
import {  Row, Card, Col, Badge } from "antd";
import fakeApi from "../../assets/data/data.json";
import styles from "./styles.module.scss";

const Home = () => {
  const urlAvatar =
    "https://images.ctfassets.net/49vqjgy9zjzd/XASRYtoFDuJ4Pp5CsIkhi/215e3a1cd82209307a85a12a02f38e1b/hoang.jpeg";
  return (
    <>
      <Row gutter={[16, 16]}>
        {fakeApi.data.advisorProfileCollection.items.map((item, index) => (
          <Col span={8} key={index}>
            <Card
              hoverable
              cover={
                <img
                  className={styles.avatar}
                  alt={item?.avatarUrl?.title}
                  src={item?.avatarUrl?.url || urlAvatar}
                />
              }
            >
              <p>
                Name: {item.displayName}
                <span className={styles.status}>
                  {item.status === "online" ? (
                    <Badge status="success" />
                  ) : (
                    <Badge status="error" />
                  )}
                </span>
              </p>
              <p>Email: {item.email || "updating"}</p>
              <p>Phone: {item.phone || "updating"}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Home;
