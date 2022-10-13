import "./App.css";
import "antd/dist/antd.css";
import Data from "./data.json";
import { Table, Input } from "antd";
import React, { useState } from "react";

function App() {
  const [listItem, setListItem] = useState(Data.data.advisorProfileCollection.items)
  const [searchText, setSearchText] = useState("");

  const columns = [
    {
      key: "name",
      title: "name",
      className: "title mt-10",
      dataIndex: "name",
      render: (item, record, index) => {
        return {
          children: <div>{record.displayName}</div>,
        };
      },
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return record.displayName?.includes(value);
      },
    },
    {
      key: "email",
      title: "email",
      className: "title mt-10",
      dataIndex: "email",
      render: (item, record, index) => {
        return {
          children: <div>{record.email}</div>,
        };
      },
    },
    {
      key: "phone",
      title: "phone",
      className: "title mt-10",
      dataIndex: "phone",
      render: (item, record, index) => {
        return {
          children: <div>{record.phone}</div>,
        };
      },
    },
    {
      key: "subjects",
      title: "subjects",
      className: "title mt-10",
      dataIndex: "subjects",
      render: (item, record, index) => {
        return {
          children: (
            <div>
              {record.categoriesCollection.items.map((x) => {
                return <div>{x.displayName}</div>;
              })}
            </div>
          ),
        };
      },
    },
    {
      key: "status",
      title: "status",
      className: "title mt-10",
      dataIndex: "status",
      render: (item, record, index) => {
        return {
          children: (
            <div>
              {record.servicesCollection.items.map((x) => {
                return <div>{x.name}</div>;
              })}
            </div>
          ),
        };
      },
    },
    {
      key: "skill",
      title: "skill",
      className: "title mt-10",
      dataIndex: "skill",
      render: (item, record, index) => {
        return {
          children: (
            <div>
              {record.skillsCollection.items.map((x) => {
                return <div onChan={filterCate}>{x.displayName}</div>;
              })}
            </div>
          ),
        };
      },
    },
  ];

  const filterCate = React.useCallback((query, listItem) => {
    return listItem.reduce((previousValue, currentValue) => {
      let cates = currentValue.categoriesCollection.items;
      for (const cate of cates) {
        if (cate.displayName === query) {
          previousValue.push(currentValue);
        }
      }
      return previousValue;
    }, []);

  }, [listItem]);

  return (
    <div className="App">
      <div className="input-search">
        <Input
          style={{ marginBottom: 8 }}
          type="text"
          placeholder="Enter your search name..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>

      <div>
        <button style={{ marginBottom: "40px", marginLeft:"50px" }} onClick={() => setListItem(filterCate("Tư vấn tâm lý", listItem))}>
          Click filter Categories
        </button>
        <Table dataSource={listItem} columns={columns} pagination={false} />
      </div>
    </div>
  );
}

export default App;
