import { CategoryType, AdvisorType } from "./types";
import _ from "lodash";

const getUniqueCategoriesFromAdvisors = (
  data: Array<AdvisorType>
): Array<CategoryType> => {
  const allCategories = data.reduce(
    (accu: Array<CategoryType>, advisorItem) => {
      return [...accu, ...advisorItem.categoriesCollection.items];
    },
    []
  );

  const uniqueCategoies = _.uniqBy(allCategories, "sys.id");
  return uniqueCategoies;
};

export { getUniqueCategoriesFromAdvisors };
