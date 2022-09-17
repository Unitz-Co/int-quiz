import React, { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import {
  AdvisorType,
  CategoryType,
  getUniqueCategoriesFromAdvisors,
} from "utils";
import _ from "lodash";
const useHome = () => {
  const [advisors, setAdvisors] = useState<Array<AdvisorType>>([]);
  const [searchString, setSearchString] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getDataFromFile();
  }, []);

  // Dynamic loading file to simulate api request
  const getDataFromFile = async () => {
    try {
      const dataJson = await import("assets/data.json");
      setAdvisors(dataJson.data.advisorProfileCollection.items);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const searchedData = useMemo(() => {
    let tempAdvisors = _.clone(advisors);

    if (searchString) {
      tempAdvisors = tempAdvisors.filter((item) =>
        item.displayName.toLowerCase().includes(searchString.toLowerCase())
      );
    }

    if (categories.length > 0) {
      categories.forEach((categoryId) => {
        tempAdvisors = tempAdvisors.filter((item) =>
          item.categoriesCollection.items
            .map((item) => item.sys.id)
            .includes(categoryId)
        );
      });
    }

    return tempAdvisors;
  }, [advisors, searchString, categories]);

  const categoryList = useMemo(() => {
    return getUniqueCategoriesFromAdvisors(advisors);
  }, [advisors]);

  const handleSearchData = (text: string) => {
    setSearchString(text);
  };

  const handleSelectCategories = (category: CategoryType) => {
    setCategories((prev) => {
      if (prev.includes(category.sys.id)) {
        return prev.filter((item) => item !== category.sys.id);
      }
      return [...prev, category.sys.id];
    });
  };

  return {
    setSearchString,
    setCategories,
    loading,
    categoryList,
    searchedData,
    handleSearchData,
    handleSelectCategories,
    categories,
  };
};

export default useHome;
