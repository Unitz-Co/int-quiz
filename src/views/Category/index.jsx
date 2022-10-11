import React, { useState } from "react";
import { Input, Row, Card, Col, Badge } from "antd";
import fakeApi from "../../assets/data/data.json";
import styles from "./styles.module.scss";
import useDebounce from "../../assets/hooks/UseDebounce";
const { Search } = Input;

const Category = () => {
  const [search, setSearch] = useState("");
  const [filteredName, setFilteredName] = useState([]);
  const urlAvatar =
    "https://images.ctfassets.net/49vqjgy9zjzd/XASRYtoFDuJ4Pp5CsIkhi/215e3a1cd82209307a85a12a02f38e1b/hoang.jpeg";
  const dataName = fakeApi?.data?.advisorProfileCollection?.items;
  useDebounce(
    () => {
      setFilteredName(
        dataName.filter(
          (d) =>
            d.displayName.toLowerCase().includes(search.toLowerCase()) ||
            d.status.toLowerCase().includes(search.toLowerCase())
        )
      );
    },
    [dataName, search],
    800
  );
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Row gutter={[16, 16]}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="smaller"
          onChange={handleSearch}
          value={search}
        />

        {filteredName.map((item, index) => (
          <Col lg={8} md={8} sm={12} xs={24} key={index}>
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
export default Category;
