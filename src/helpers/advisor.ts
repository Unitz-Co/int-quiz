export const NOT_EXIST_CATEGORY = "Don't worry, let me know if you have any questions";

export const uniqCategories = (items: any) =>
  items.length > 0 &&
  items.reduce((prev: any, curr: any) => {
    const isExisted = prev.filter((item: any) => item.sys.id === curr.sys.id);
    if (isExisted.length > 0) {
      return prev;
    }
    return [...prev, curr];
  }, []);