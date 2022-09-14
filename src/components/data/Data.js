import React, { useState } from "react";
import myJson from "./data.json";
import Table from "../table/Table";

const Data = () => {
  const data = myJson.data.advisorProfileCollection.items;
  const [view, setView] = useState(true);
  const [value, setValue] = useState("");
  const [dataSource, setDataSource] = useState(data);
  const [tableFilter, setTableFilter] = useState([]);

  const handleFilter = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filterTable = dataSource.filter((item) =>
        Object.keys(item).some((index) =>
          String(item[index])
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        )
      );
      setTableFilter([...filterTable]);
    } else {
      setValue(e.target.value);
      setDataSource([...dataSource]);
    }
  };
  return (
    <div>
      <div className="flex justify-around items-center my-10">
        <button
          className="w-[200px] py-3 rounded-lg shadow-gray-500 shadow-lg transition duration-1000 hover:scale-110 bg-green-500 text-white text-2xl font-bold  "
          onClick={() => setView(!view)}
        >
          {view ? "Horizontial" : "Vertical"}
        </button>
        <input
          type="text"
          name="search"
          className=" px-5 border-2 border-gray-500 outline-none rounded-lg h-16 shadow-gray-500 shadow-lg "
          placeholder="Type here to search..."
          onChange={handleFilter}
        />
      </div>
      {view ? (
        <Table className="w-full">
          <thead>
            <tr>
              <th>Display name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Avatar</th>
              <th>Categories collection</th>
              <th>Services Collection</th>
              <th>Skills collection</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {value.length > 0
              ? tableFilter.map((item, index) => (
                  <tr key={index}>
                    <td>{item.displayName}</td>
                    <td>{item?.email}</td>
                    <td>{item?.phone}</td>

                    <td>
                      {item.avatarUrl && (
                        <img
                          className="w-20 h-20 object-cover"
                          src={item.avatarUrl?.url}
                          alt=""
                        />
                      )}
                    </td>
                    <td>
                      {item.categoriesCollection.items.length > 0 &&
                        item.categoriesCollection?.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                    <td>
                      {item.servicesCollection?.items &&
                        item.servicesCollection?.items.map((item, index) => (
                          <p key={index}>{item.name}</p>
                        ))}
                    </td>
                    <td>
                      {item.skillsCollection?.items &&
                        item.skillsCollection?.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                    <td>
                      {" "}
                      {item?.status == "Online" ? (
                        <span className="text-green-500 drop-shadow-lg">
                          Online
                        </span>
                      ) : (
                        <p className="text-gray-700 drop-shadow-lg">Offline</p>
                      )}
                    </td>
                  </tr>
                ))
              : dataSource.map((item, index) => (
                  <tr key={index}>
                    <td>{item.displayName}</td>
                    <td>{item?.email}</td>
                    <td>{item?.phone}</td>

                    <td>
                      {item.avatarUrl && (
                        <img
                          className="w-20 h-20"
                          src={item.avatarUrl?.url}
                          alt=""
                        />
                      )}
                    </td>
                    <td>
                      {item.categoriesCollection?.items &&
                        item.categoriesCollection?.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                    <td>
                      {item.servicesCollection?.items &&
                        item.servicesCollection?.items.map((item, index) => (
                          <p key={index}>{item.name}</p>
                        ))}
                    </td>
                    <td>
                      {item.skillsCollection?.items &&
                        item.skillsCollection?.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                    <td>
                      {item?.status == "Online" ? (
                        <span className="text-green-500 drop-shadow-lg">
                          Online
                        </span>
                      ) : (
                        <p className="text-gray-700 drop-shadow-lg">Offline</p>
                      )}
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
      ) : (
        <Table>
          <tbody>
            <tr>
              <th>Display name</th>
              {value?.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>{item.displayName}</td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>{item.displayName}</td>
                  ))}
            </tr>
            <tr>
              <th>Email</th>
              {value?.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>{item.email}</td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>{item.email}</td>
                  ))}
            </tr>
            <tr>
              <th>Phone</th>
              {value?.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>{item.phone}</td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>{item.phone}</td>
                  ))}
            </tr>
            <tr>
              <th>Avatar</th>
              {value?.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>
                      {item.avatarUrl && (
                        <img
                          className="w-20 h-20"
                          src={item.avatarUrl?.url}
                          alt=""
                        />
                      )}
                    </td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>
                      {item.avatarUrl && (
                        <img
                          className="w-20 h-20"
                          src={item.avatarUrl?.url}
                          alt=""
                        />
                      )}
                    </td>
                  ))}
            </tr>
            <tr>
              <th>Categories collection</th>
              {value.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>
                      {item.categoriesCollection.items &&
                        item.categoriesCollection.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>
                      {item.categoriesCollection.items &&
                        item.categoriesCollection.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                  ))}
            </tr>
            <tr>
              <th>Services Collection</th>
              {value.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>
                      {item.servicesCollection?.items &&
                        item.servicesCollection?.items.map((item, index) => (
                          <p key={index}>{item.name}</p>
                        ))}
                    </td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>
                      {item.servicesCollection?.items &&
                        item.servicesCollection?.items.map((item, index) => (
                          <p key={index}>{item.name}</p>
                        ))}
                    </td>
                  ))}
            </tr>
            <tr>
              <th>Skills collection</th>
              {value.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>
                      {item.skillsCollection.items &&
                        item.skillsCollection.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>
                      {item.skillsCollection.items &&
                        item.skillsCollection.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                  ))}
            </tr>
            <tr>
              <th>Status</th>
              {value?.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>
                      {" "}
                      {item?.status == "Online" ? (
                        <span className="text-green-500 drop-shadow-lg">
                          Online
                        </span>
                      ) : (
                        <p className="text-gray-700 drop-shadow-lg">Offline</p>
                      )}
                    </td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>
                      {" "}
                      {item?.status == "Online" ? (
                        <span className="text-green-500 drop-shadow-lg">
                          Online
                        </span>
                      ) : (
                        <p className="text-gray-700 drop-shadow-lg">Offline</p>
                      )}
                    </td>
                  ))}
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Data;
