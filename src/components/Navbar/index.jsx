import { HomeOutlined, FundOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo_Unitz.jpg";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import styles from "./styles.module.scss";
const { Sider } = Layout;

const Navbar = () => {
  return (
    <>
      <Sider className={styles["wrapper-sider"]}>
        <div className={styles.logoUnitz}>
          <img src={Logo} className={styles.logo} alt="text" />
        </div>
        <Menu theme="dark" className={styles["menu-items"]}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="cryptocurrencies" icon={<FundOutlined />}>
            <Link to="/category">Category</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};
export default Navbar;
