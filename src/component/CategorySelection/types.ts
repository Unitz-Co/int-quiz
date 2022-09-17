import { CategoryType } from "utils";

type CategorySelectionProps = {
  data: Array<CategoryType>;
  categories: string[];
  onChange: (category: CategoryType) => void;
};

export type { CategorySelectionProps };
