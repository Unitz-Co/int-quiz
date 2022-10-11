export default function useFilter(filterString, usersData, activityStatus) {
  if (filterString) {
    usersData = usersData.filter(
      (user) =>
        user.displayName.toLowerCase().includes(filterString.toLowerCase()) ||
        user.categoriesCollection.items.find((category) =>
          category.displayName
            .toLowerCase()
            .includes(filterString.toLowerCase())
        )
    );
  }

  if (activityStatus) {
    usersData = usersData.filter((user) =>
      activityStatus === "1" ? user.status === true : user.status === false
    );
  }

  return usersData;
}
