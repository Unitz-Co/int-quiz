import React, { useState } from 'react';
import './App.css';

const Table = ({ data }) => {
  const [view, setView] = useState(true);
  const handleView = () => {
    setView((current) => !current);
  };

  return (
    <>
      <div style={{ margin: '5px' }}>
        <label htmlFor="">View: </label>
        <input
          className="type-input"
          type="button"
          onClick={handleView}
          value={view ? 'Vertical' : 'Horizontal'}
        />
      </div>
      {view ? (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Image</th>
              <th>Status</th>
              <th>Categories</th>
            </tr>
            {data.map((item) => (
              <tr key={item._id} className="listItem">
                <td>{item.displayName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <img
                    style={{ width: '100px', height: '100px', borderRadius: '8px' }}
                    src={item?.avatarUrl?.url}
                    alt=""
                  />
                </td>
                <td>{item?.status}</td>
                <td>
                  {item?.categoriesCollection.map((cate) => (
                    <>
                      {cate.cateName}.
                      <br />
                    </>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table>
          {data.map((item) => (
            <div key={item._id}>
              <tr>
                <th>Name:</th>
                <td>{item.displayName}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{item.email}</td>
              </tr>
              <tr>
                <th>Phone:</th>
                <td>{item.phone}</td>
              </tr>
              <tr>
                <th>Image:</th>
                <td>
                  <img
                    style={{ width: '100px', height: '100px', borderRadius: '8px' }}
                    src={item?.avatarUrl?.url}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <th>Status:</th>
                <td>{item?.status}</td>
              </tr>
              <tr>
                <th>Categories:</th>
                <td>
                  {item?.categoriesCollection.map((cate) => (
                    <>
                      {cate.cateName}.
                      <br />
                    </>
                  ))}
                </td>
              </tr>
            </div>
          ))}
        </table>
      )}
    </>
  );
};

export default Table;
