import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Col, Layout, Row } from "antd";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Category from "./views/Category";
const {  Content, Footer, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Sider>
        <Navbar />
      </Sider>
      <Layout>
        <Content style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category/>}/>
          </Routes>
        </Content>
      </Layout>
      <Footer className="footer"></Footer>
    </Layout>
  );
}

export default App;
