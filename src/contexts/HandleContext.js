import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = `https://vutruongsinh-unitz-co-server.herokuapp.com`;

export const HandleContext = createContext();

const HandleContextProvider = ({ children }) => {

  const [getItems, setGetItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [originItems, setOriginItems] = useState([]);
  const [saveStatus, setSaveStatus] = useState(null);
  const [saveName, setSaveName] = useState(null);

  useEffect(() => {
    const fetchStudentLists = async () => {
      try {
        const reponse = await axios.get(`${baseURL}/data`);
        const items = reponse.data.advisorProfileCollection.items;

        setGetItems(items);
        setOriginItems(items);

        setLoading(false);

      } catch (error) { console.log(error.message) }
    };
    fetchStudentLists();
  }, []);

  const statusHandle = (arrTarget, status) => {
    if (status !== 'search') {
      const newItems = arrTarget.filter(item => {
        return item.status === status
      });

      setGetItems(newItems);
      if (arrTarget === originItems) setSaveStatus(newItems)
    } else {
      setGetItems(originItems)
    }
  };

  const handleChangeStatus = status => {
    if (saveName) {
      statusHandle(saveName, status)
    } else {
      statusHandle(originItems, status)
    }
  };

  const nameHandle = (arrTarget, value) => {
    const searchName = arrTarget.filter(item => item.displayName.toLowerCase().includes(value));
    setGetItems(searchName);

    if (arrTarget === originItems) setSaveName(searchName);
  };

  const handleSearchName = value => {
    if (saveStatus) {
      nameHandle(saveStatus, value)
    } else {
      nameHandle(originItems, value)
    }
  };

  const categoryHandle = (arrTarget, value) => {
    if (value !== '') {
      const newArr2 = [];

      const newArr = arrTarget.map(item => {
        return item.categoriesCollection.items.some(item => {
          return item.displayName.toLowerCase().includes(value);
        })
      });

      const indexArr = newArr.map((value, i) => {
        if (value) return i;
      });

      indexArr.forEach(index => {
        arrTarget.forEach((cur, i) => {
          if (index === i) {
            newArr2.push(cur)
          };
        });
      });

      setGetItems(newArr2);
    } else { setGetItems(originItems) }
  };

  const handleSearchCategory = value => {
    if (saveStatus) {
      categoryHandle(saveStatus, value)
    } else {
      categoryHandle(originItems, value)
    }
  };

  const handleContextData = {
    getItems,
    isLoading,
    setLoading,
    handleChangeStatus,
    handleSearchName,
    handleSearchCategory,
  };

  return (
    <HandleContext.Provider value={handleContextData}>
      {children}
    </HandleContext.Provider>
  )
};

export default HandleContextProvider;
