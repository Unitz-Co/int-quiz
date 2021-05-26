import { toJS } from "mobx";

const Helper = {
  log() {
    for (let i = 0, len = arguments.length; i < len; i++) {
      console.log(toJS(arguments[i]));
    }
  },
  parseAdvisor(advisor) {
    let result = {};
    if (advisor) {
      result = {
        name: advisor.displayName,
        image: advisor.avatarUrl?.url,
        phone: advisor.phone,
        email: advisor.email,
        category: advisor.category,
      };
    }
    return result;
  },
  parseAdvisors(advisors) {
    const data = advisors;
    if (data) {
      data.forEach((item) => {
        //     Helper.print("item", item);
        if (item.categoriesCollection?.items?.length) {
          item.category = item.categoriesCollection.items[0].displayName;
        }
      });
    }
    Helper.log("advisors", data);
    return data;
  },
};
export default Helper;
