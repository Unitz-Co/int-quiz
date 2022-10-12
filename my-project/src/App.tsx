import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import data from "./data.json";
import Table from "antd/lib/table/Table";
import Input from "antd/lib/input";
import moment from "moment";
import { Select } from "antd";

function App() {
  const { Search } = Input;
  const { Option } = Select;
  const [dataUser, setDataUser] = useState<any>([]);
  const [newDataUser, setNewDataUser] = useState<any>([]);
  const [categoriesCollection, setCategoriesCollection] = useState<any>([]);
  const [servicesCollection, setServicesCollection] = useState<any>([]);
  const [skillsCollection, setSkillsCollection] = useState<any>([]);
  const [categories, setSategories] = useState<any>("");

  useEffect(() => {
    setDataUser(data.data.advisorProfileCollection.items);
    setNewDataUser(data.data.advisorProfileCollection.items);

    // get categoriesCollection
    const categoriesCollectionS = data.data.advisorProfileCollection.items.map(
      (item: any) => {
        return item.categoriesCollection.items;
      }
    );
    const duplicateCollection = categoriesCollectionS.reduce(
      (previousValue, currentValue) => previousValue.concat(currentValue),
      []
    );
    const categoriesIDS = duplicateCollection.map(
      (o: { displayName: any }) => o.displayName
    );
    const Categories = duplicateCollection.filter(
      ({ displayName }: any, index: number) =>
        !categoriesIDS.includes(displayName, index + 1)
    );
    setCategoriesCollection(Categories);

    // get servicesCollection
    const servicesCollectionS = data.data.advisorProfileCollection.items.map(
      (item: any) => {
        return item.servicesCollection.items;
      }
    );
    const duplicateServices = servicesCollectionS.reduce(
      (previousValue, currentValue) => previousValue.concat(currentValue),
      []
    );
    const servicesIDS = duplicateServices.map((o: { name: any }) => o.name);
    const Services = duplicateServices.filter(
      ({ name }: any, index: number) => !servicesIDS.includes(name, index + 1)
    );
    setServicesCollection(Services);

    // get skillsCollection
    const skillsCollectionS = data.data.advisorProfileCollection.items.map(
      (item: any) => {
        return item.skillsCollection.items;
      }
    );
    const duplicateSkills = skillsCollectionS.reduce(
      (previousValue, currentValue) => previousValue.concat(currentValue),
      []
    );
    const skillsIDS = duplicateSkills.map(
      (o: { displayName: any }) => o.displayName
    );
    const Skills = duplicateSkills.filter(
      ({ displayName }: any, index: number) =>
        !skillsIDS.includes(displayName, index + 1)
    );
    setSkillsCollection(Skills);
    // console.debug("duplicateCollection", duplicateCollection);
    console.debug("categoriesIDS", Categories);
  }, []);
  console.debug("newDataUser", newDataUser);

  // .map((item:any)=>item?.sys.id.includes(categories))
  const onSearch = (value: string) => {
    const result = dataUser.filter((word: any) =>
      word.displayName.toLowerCase().includes(value.toLowerCase())
  
    // word.categoriesCollection.items[0]?.sys.id.includes(categories)

    );
    
    setNewDataUser(result);
  };

  const onChangeCategories = (value: string) => {
    setSategories(value === undefined ? "" : value);
  };
  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatarUrl",
      key: "avatarUrl",
      render: (item: any, { avatarUrl }: any) => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          src={item?.url}
          title={item?.title}
          style={{ height: "30px", width: "30px" }}
        />
      ),
    },

    {
      title: "displayName",
      dataIndex: "displayName",
      key: "displayName",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "active",
      dataIndex: "active",
      key: "active",
      render: (item: any) => (
        <span style={{ color: item === 1 ? "green" : "red" }}>
          {item === 1 ? "trực tuyến" : "ngoại tuyến"}
        </span>
      ),
    },
    {
      title: "publishedAt",
      dataIndex: "sys",
      key: "sys",
      render: (item: any, { avatarUrl }: any) => (
        <span>{moment(item?.publishedAt).format("DD/MM/YYYY")}</span>
      ),
    },
  ];

  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "1rem 0",
          gap: "1rem",
        }}
      >
        <Select
          style={{
            width: 300,
          }}
          allowClear
          showSearch
          placeholder="Select a categories collection"
          optionFilterProp="children"
          onChange={onChangeCategories}
          filterOption={(input, option) =>
            (option!.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
        >
          {categoriesCollection &&
            categoriesCollection.map((item: any) => (
              <Option value={item?.sys.id}>{item?.displayName}</Option>
            ))}
        </Select>
        <Select
          style={{
            width: 300,
          }}
          showSearch
          placeholder="Select a services collection"
          optionFilterProp="children"
          onChange={onChangeCategories}
          filterOption={(input, option) =>
            (option!.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
        >
          {servicesCollection &&
            servicesCollection.map((item: any) => (
              <Option value={item?.sys.id}>{item?.name}</Option>
            ))}
        </Select>
        <Select
          style={{
            width: 300,
          }}
          showSearch
          placeholder="Select a skills collection"
          optionFilterProp="children"
          onChange={onChangeCategories}
          filterOption={(input, option) =>
            (option!.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
        >
          {skillsCollection &&
            skillsCollection.map((item: any) => (
              <Option value={item?.sys.id}>{item?.displayName}</Option>
            ))}
        </Select>
        <Search
          allowClear
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 300,
          }}
        />
      </div>

      <Table columns={columns} dataSource={newDataUser} />
    </div>
  );
}

export default App;
