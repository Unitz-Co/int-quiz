import React from "react";
import { memo } from "react";
import { CategorySelectionProps } from "./types";
import CategorySelectionUI from "./CategorySelectionUI";

const CategorySelection = ({
  data,
  onChange,
  categories,
}: CategorySelectionProps) => {
  return (
    <CategorySelectionUI
      data={data}
      categories={categories}
      onChange={onChange}
    />
  );
};

export default memo(CategorySelection);
export * from "./types";
