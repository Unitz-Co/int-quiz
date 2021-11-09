
export const filterName = (data, filter) => filter.displayName !== '' && data.displayName.toLowerCase().includes(filter.name.toLowerCase());

export const filterStatus = (data, filter) => filter.userStatus !== '' ? data.userStatus === filter.userStatus : data;

export const filterCategory = (data, selectedData) => {
  if(selectedData.selectedCategories.length > 0) {
    const categoryIds = selectedData.selectedCategories.map(d => d.sys.id);
    const filterData = data.filter(cat => categoryIds.includes(cat.sys.id));
    return filterData.length > 0
  }
  return data;
}