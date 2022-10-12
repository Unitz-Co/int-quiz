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
  const [services, setServices] = useState<any>("");
  const [skills, setSkills] = useState<any>("");
  const [activess, setActive] = useState<any>("");

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
  }, []);
  console.debug("newDataUser", newDataUser);

  const onSearch = (value: string) => {
    console.debug("search :", value);
    console.debug("categories :", categories);
    console.debug("services :", services);
    console.debug("skills :", skills);
    console.debug("active :", activess);

    const categoriess =
      categories === ""
        ? dataUser
        : dataUser.filter((user: any) =>
            user.categoriesCollection.items.find((Categories: any) =>
              Categories.sys.id.includes(categories)
            )
          );

    const servicess =
      services === ""
        ? categoriess
        : categoriess.filter((user: any) =>
            user.servicesCollection.items.find((Services: any) =>
              Services.sys.id
                .toLowerCase()
                .includes(services === "" ? "" : services.toLowerCase())
            )
          );

    const skillss =
      skills === ""
        ? servicess
        : servicess.filter((user: any) =>
            user.skillsCollection.items.find((Skills: any) =>
              Skills.sys.id
                .toLowerCase()
                .includes(skills === "" ? "" : skills.toLowerCase())
            )
          );

    const actives =
      activess === ""
        ? skillss
        : skillss.filter(
            (user: any) => user.active === (activess === "" ? "" : activess)
          );

    const searchh =
      value === ""
        ? actives
        : actives.filter((user: any) =>
            user.displayName
              .toLowerCase()
              .includes(value === "" ? "" : value.toLowerCase().trim())
          );

    setNewDataUser(searchh);
  };

  const onChangeCategories = (value: string) => {
    setSategories(value === undefined ? "" : value);
    return setNewDataUser(dataUser);
  };
  const onChangeServices = (value: string) => {
    setServices(value === undefined ? "" : value);
  };
  const onChangeSkills = (value: string) => {
    setSkills(value === undefined ? "" : value);
  };
  const onChangeActive = (value: string) => {
    setActive(value === undefined ? "" : value);
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
          allowClear
          showSearch
          placeholder="Select a services collection"
          optionFilterProp="children"
          onChange={onChangeServices}
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
          allowClear
          showSearch
          placeholder="Select a skills collection"
          optionFilterProp="children"
          onChange={onChangeSkills}
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
        <Select
          style={{
            width: 300,
          }}
          allowClear
          showSearch
          placeholder="Select active"
          optionFilterProp="children"
          onChange={onChangeActive}
          filterOption={(input, option) =>
            (option!.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
        >
          <Option value={1}>Trực tuyến</Option>
          <Option value={0}>Ngoại tuyến</Option>
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
