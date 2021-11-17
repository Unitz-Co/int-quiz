import request from '../utils/request';

// export function getAdvisors(params = {}) {
//   // const filter = {};
//   // if (params && params.name) {
//   //   filter.name_like = params.name;
//   // }

//   // if (params && params.category) {
//   //   filter.categories_like = params.category;
//   // }

//   // if (params && [0, 1].indexOf(params.status) !== -1) {
//   //   filter.status = params.status;
//   // }

//   // const query = new URLSearchParams(filter).toString();
//   request.get(`/data?${query}`);  
// }

export const getAdvisors = async (params = {}) => {
  const advisorCollection = await request.get(`/data`);
  const { advisorProfileCollection } = advisorCollection || {};
  const { items } = advisorProfileCollection || {};
  const { name, category, status } = params;
  return (items || [])
    .filter(advisor => {
      if (!name) {
        return advisor;
      }

      const isNameLiked = advisor.displayName.toLowerCase().indexOf(name.toLowerCase()) !== -1;
      return isNameLiked;
    })
    .filter(advisor => {
      if (!category) {
        return advisor;
      }

      const { categoriesCollection } = advisor;
      if (!categoriesCollection || !categoriesCollection.items || !categoriesCollection.items.length) {
        return false;
      }

      const categories = categoriesCollection.items.map(cat => cat.displayName.toLowerCase());
      const foundCategory = categories.find(cat => cat.indexOf(category.toLowerCase()) !== -1);
      return foundCategory;
    })
    .filter(advisor => {
      if ([0, 1].indexOf(status) === -1) {
        return advisor;
      }
      if (status === 0 && [0, 1].indexOf(advisor.status) === -1) {
        return advisor;
      }

      return advisor.status === status;
    });
}

export const updateAdvisor = async (id, body) => {
  const advisors = await getAdvisors({});

  return request.put(`/data`, {
    advisorProfileCollection: {
      items: advisors.map(advisor => {
        if (advisor.sys.id === id) {
          return body
        }
        return advisor;
      })
    }
  });
}
