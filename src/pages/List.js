import React, { useEffect } from "react";
import { Table, Input, Radio } from "antd";
import { Fragment } from "react";
import { dataJSON } from "../data/data";
import { useState } from "react";

const List = () => {
  const columns = [
    {
      title: "displayName",
      dataIndex: "displayName",
      // sorter: (a, b) => a.name?.length - b.name?.length,
      // sortDirections: ["descend"],
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
      title: "avatarUrl",
      dataIndex: "avatarUrl",
      key: "avatarUrl",

      render: (text, item, index) => {
        return (
          <Fragment>
            <img
              src={item.avatarUrl?.url}
              alt={item.displayName}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                // e.target.src = `https://picsum.photos/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
    },
    {
      title: "categoriesCollection",
      dataIndex: "categoriesCollection",
      key: "categoriesCollection",
      render: (text, item, index) => {
        return (
          <Fragment>
            {item.categoriesCollection.items.map((i, index) => (
              <li key={index}>
                <span>{i.displayName}</span>
                <img
                  src={i.avatarUrl?.url}
                  alt={i.avatarUrl?.title}
                  width={50}
                />
              </li>
            ))}
          </Fragment>
        );
      },
    },
    {
      title: "skillsCollection",
      dataIndex: "skillsCollection",
      key: "skillsCollection",
      render: (text, item, index) => {
        return (
          <Fragment>
            {item.skillsCollection.items.map((i, index) => (
              <li key={index}>
                <span>{i.displayName}</span>
              </li>
            ))}
          </Fragment>
        );
      },
    },
    {
      title: "servicesCollection",
      dataIndex: "servicesCollection",
      key: "servicesCollection",
      render: (text, item, index) => {
        return (
          <Fragment>
            {item.servicesCollection.items.map((i, index) => (
              <li key={index}>
                <span>{i.name}</span>
              </li>
            ))}
          </Fragment>
        );
      },
    },
    {
      title: "status",
      dataIndex: "online",
      key: "status",
      render: (text, item, index) => {
        return <Fragment>{item.online ? "online" : "offline"}</Fragment>;
      },
    },
  ];

  const [dataState, setDataState] = useState(
    dataJSON.advisorProfileCollection.items
  );

  const dataDefault = dataJSON.advisorProfileCollection.items;

  const data = dataState;

  const onChange = (pagination, filters, sorter, extra) => {};

  const { Search } = Input;

  const [value, setValue] = useState("all");

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    onSearch(searchValue);
  }, [value]);

  const onChangeRadio = (e) => {
    setValue(e.target.value);
  };

  const filterByStatus = (data) => {
    if (value === "online") {
      const result = data.filter((item) => item.online);
      setDataState(result);
    }

    if (value === "offline") {
      const result = data.filter((item) => !item.online);
      setDataState(result);
    }

    if (value === "all") {
      setDataState(data);
    }
  };

  const onSearch = (value) => {
    if (value.length) {
      let resultByName = dataDefault.filter((item) => {
        return item.displayName?.toLowerCase().includes(value.toLowerCase());
      });

      let resultByCategory = [];
      dataDefault.map((item) => {
        item.categoriesCollection.items.map((c) => {
          if (c.displayName?.toLowerCase().includes(value.toLowerCase())) {
            resultByName = resultByName.filter(
              (n) => !n.sys.id.includes(item.sys.id)
            );

            resultByCategory = resultByCategory.filter(
              (n) => !n.sys.id.includes(item.sys.id)
            );
            resultByCategory.push(item);
          }
        });
      });

      console.log("rsbc: ", resultByCategory);
      let result = resultByName.concat(resultByCategory);
      filterByStatus(result);

      // setDataState(result);
    } else {
      filterByStatus(dataDefault);
    }
  };

  return (
    <div>
      <Search
        className="my-4"
        placeholder="Enter name or category..."
        onChange={({ target }) => setSearchValue(target.value)}
        onSearch={onSearch}
        enterButton
      />
      <Radio.Group onChange={onChangeRadio} value={value}>
        <Radio value="online">Online</Radio>
        <Radio value="offline">Offline</Radio>
        <Radio value="all">All</Radio>
      </Radio.Group>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={(obj) => obj.sys.id}
      />
    </div>
  );
};

export default List;
