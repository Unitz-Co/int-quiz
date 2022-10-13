export function advisorListFilterByKeyword(list, keyword, onlineOnly = false) {
  const results = [];

  list.forEach(advisor => {
    const pattern = new RegExp(keyword, 'i');

    if (advisor.displayName.search(pattern) !== -1) {
      if (!onlineOnly) {
        results.push(advisor);
      } else if (onlineOnly && advisor.online) {
        results.push(advisor);
      }
    } else if (advisor.categoriesCollection?.items) {
      // Search by category
      advisor.categoriesCollection?.items.every(category => {
        if (category.displayName.search(pattern) !== -1) {
          if (!onlineOnly) {
            results.push(advisor);
            return false;
          } else if (onlineOnly && advisor.online) {
            results.push(advisor);
            return false;
          }
          // Ignore next item
        }

        return true;
      });
    }
  });

  return results;
}