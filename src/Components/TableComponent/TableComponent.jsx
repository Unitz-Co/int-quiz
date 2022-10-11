import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Tag } from "antd";
import React, { useRef, useState } from "react";
import dataJSON from "../../assets/json/data.json";
import Highlighter from "react-highlight-words";
import {
    CHAT_SERVICE,
    GHI_NHO,
    LANG_NGHE,
    OFFLINE,
    ONLINE,
    PHONE_SERVICE,
    TAM_LY,
    TU_VAN,
    VIDEO_SERVICE,
} from "../../config";
//!add status field for data
let data = dataJSON.data.advisorProfileCollection.items;
data = data.map((item, index) => {
    const status = index % 2 == 0 ? ONLINE : OFFLINE;
    return { ...item, status };
});
export default function TableComponent() {
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);
    const [isHorizontalTable, setIsHorizontalTable] = useState(false);
    const horizontalClass = isHorizontalTable ? "horizontal-table" : "";
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1890ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) => {
            return record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase());
        },
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) => {
            return searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            );
        },
    });
    //! my functions
    function uniq(a) {
        return Array.from(new Set(a));
    }
    const filterCategory = () => {
        // ! lấy tất cả categories trong file categoryCollection
        const { items } = dataJSON.data.advisorProfileCollection;
        const myArr = [];
        items.forEach((item, index) => {
            item.categoriesCollection.items.forEach((categoryItem, categoryIndex) => {
                const { displayName } = categoryItem;
                myArr.push(displayName);
            });
        });
        //! lọc hết những phần tử trùng lặp
        let uniqArr = uniq(myArr);
        //!  tạo thành mảng các object có 2 field key và value và đưa vào table antd
        uniqArr = uniqArr.map((item, index) => {
            return { text: item, value: item };
        });
        return uniqArr;
    };
    const renderService = (serviceArray) => {
        return serviceArray.map((item, index) => {
            return <div key={index.toString()}>{renderNameService(item.name)}</div>;
        });
    };
    const renderNameService = (itemName) => {
        switch (itemName) {
            case VIDEO_SERVICE:
                return <Tag color="magenta">Video</Tag>;
            case PHONE_SERVICE:
                return <Tag color="green">Phone</Tag>;
            case CHAT_SERVICE:
                return <Tag color="cyan">Chat</Tag>;
            default:
                return;
        }
    };
    const renderCategory = (categoryArray) => {
        return categoryArray.map((Category, index) => {
            return (
                <div key={index.toString()}>
                    <p className="relative cursor-pointer w-max two my-0 mx-0 p-0">
                        <span>{Category.displayName}</span>
                        <span
                            style={{
                                height: "0.1rem",
                                bottom: "0.1rem",
                            }}
                            className="absolute  left-1/2 w-0 transition-all  bg-blue-300"
                        ></span>
                        <span
                            style={{
                                height: "0.1rem",
                                bottom: "0.1rem",
                            }}
                            className="absolute  right-1/2 w-0 transition-all  bg-blue-300"
                        ></span>
                    </p>
                </div>
            );
        });
    };
    const renderNameSkill = (skillName) => {
        switch (skillName) {
            case TAM_LY:
                return <Tag color="orange">{skillName}</Tag>;
            case TU_VAN:
                return <Tag color="geekblue">{skillName}</Tag>;
            case LANG_NGHE:
                return <Tag color="red">{skillName}</Tag>;
            case GHI_NHO:
                return <Tag color="lime">{skillName}</Tag>;
            default:
                return;
        }
    };
    const renderSkill = (SkillArray) => {
        return SkillArray.map((skill, index) => {
            return (
                <div key={index.toString() + skill.displayName}>
                    {renderNameSkill(skill.displayName)}
                </div>
            );
        });
    };
    const columns = [
        {
            title: <p className="m-0 p-0 text-center ">Name</p>,
            dataIndex: "displayName",
            key: "displayName",
            align: "center",
            ...getColumnSearchProps("displayName"),
        },
        {
            title: <p className="m-0 p-0 text-center">Email</p>,
            dataIndex: "email",
            key: "email",
            align: "center",
            render: (text, record, index) => {
                return (
                    <div style={{ minWidth: "200px" }}>
                        {text ? (
                            <p className="m-0 p-0"> {text}</p>
                        ) : (
                            <Tag color="red">None</Tag>
                        )}
                    </div>
                );
            },
        },
        {
            title: "Number phone",
            dataIndex: "phone",
            key: "phone",
            align: "center",
            render: (text, record, index) => {
                return (
                    <div>
                        {text ? (
                            <p className="m-0 p-0"> {text}</p>
                        ) : (
                            <Tag color="red">None</Tag>
                        )}
                    </div>
                );
            },
        },
        {
            title: (
                <div className="flex justify-center items-center h-14">
                    <p className=" p-0 m-0">Avatar</p>
                </div>
            ),
            dataIndex: "avatarUrl",
            key: "avatarUrl",
            align: "center",
            render: (text, record, index) => {
                return (
                    <>
                        {text?.url ? (
                            <div className="flex justify-center items-center">
                                <img className="h-14 " src={text?.url} alt={text?.title} />
                            </div>
                        ) : (
                            <div className="h-14 flex justify-center items-center">
                                <Tag color="red">None</Tag>
                            </div>
                        )}
                    </>
                );
            },
        },
        {
            title: (
                <div className="flex justify-center items-center h-10">
                    <p className=" m-0 p-0">Service</p>
                </div>
            ),
            dataIndex: "servicesCollection",
            key: "servicesCollection",
            align: "center",
            render: (text, record, index) => {
                return (
                    <div className="h-10 flex justify-center items-center">
                        {text.items.length != 0 ? (
                            renderService(text.items)
                        ) : (
                            <div className="h-14 flex justify-center items-center">
                                <Tag color="red">None</Tag>
                            </div>
                        )}
                    </div>
                );
            },
        },
        {
            title: (
                <div className="flex justify-center items-center h-16">
                    <p className="m-0 p-0">Category</p>
                </div>
            ),
            dataIndex: "categoriesCollection",
            key: "categoriesCollection",
            render: (text, record, index) => {
                return (
                    <div className="h-16 flex justify-center items-center flex-col">
                        {text.items.length != 0 ? (
                            renderCategory(text.items)
                        ) : (
                            <div className="h-14 flex justify-center items-center">
                                <Tag color="red">None</Tag>
                            </div>
                        )}
                    </div>
                );
            },
            filters: filterCategory(),
            onFilter: (value, record) => {
                console.log("value: ", value);
                console.log("record: ", record.categoriesCollection.items);
                let isFound = false;
                record.categoriesCollection.items.forEach((item, index) => {
                    if (item.displayName == value) {
                        console.log("item: >>>>>>>", item.displayName);
                        isFound = true;
                    }
                });
                return isFound;
            },
        },
        {
            title: (
                <div className="flex justify-center items-center h-20">
                    <p className=" m-0 p-0">Skill</p>
                </div>
            ),
            dataIndex: "skillsCollection",
            key: "skillsCollection",
            render: (text, record, index) => {
                return (
                    <div className="h-20 flex justify-center items-center flex-col">
                        {text.items.length != 0 ? (
                            renderSkill(text.items)
                        ) : (
                            <div className="flex justify-center items-center">
                                <Tag className="border-0" color="red">
                                    None
                                </Tag>
                            </div>
                        )}
                    </div>
                );
            },
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            align: "center",
            render: (text, record, index) => {
                return (
                    <div className="flex justify-center items-center">
                        {text == ONLINE ? (
                            <Tag color="success">{text}</Tag>
                        ) : (
                            <Tag color="default">{text}</Tag>
                        )}
                    </div>
                );
            },
            filters: [
                {
                    text: ONLINE,
                    value: ONLINE,
                },
                {
                    text: OFFLINE,
                    value: OFFLINE,
                },
            ],
            onFilter: (value, record) => {
                return record.status.indexOf(value) == 0;
            },
        },
    ];
    return (
        <div className="h-screen relative">
            <div className="px-2 mt-2 md:px-10 md:mt-6 lg:px-20 lg:mt-mt-12 absolute z-50">
                <button
                    className="button-85 font-bold"
                    onClick={() => {
                        setIsHorizontalTable(!isHorizontalTable);
                    }}
                >
                    {isHorizontalTable ? "Vertical" : "Horizontal"}
                </button>
            </div>
            <div className="flex justify-center items-center h-full w-full">
                <div className="container overflow-y-auto">
                    <Table
                        scroll={{
                            x: "max-content",
                        }}
                        columns={columns}
                        className={`${horizontalClass}`}
                        dataSource={data}
                        pagination={{ pageSize: 5 }}
                        rowKey={record => record.displayName}
                    />
                </div>
            </div>
        </div>
    );
}
