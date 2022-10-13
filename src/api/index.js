// import jsonData from "../data.json";
import { removeAccents } from "../unit";

class AdvisorService {
  getAdvisors(name, category, data, status) {
    const checkStatus = status ? (status === "All" ? false : true) : false;
    let advisorProfile = data;
    if (!name && !category && !checkStatus) {
      return advisorProfile;
    }

    let advisors = [];

    if (name) {
      let searchName = removeAccents(name.toLowerCase());
      advisorProfile.map((item) => {
        let result = removeAccents(item.displayName.toLowerCase()).includes(
          searchName
        );
        if (result) {
          advisors.push(item);
        }
      });
    }

    if (category) {
      let advisorFindCategory = [];
      let advisorProfileClone = advisorProfile;
      if (advisors.length > 0) {
        advisorProfileClone = advisors;
      }

      let searchCategory = removeAccents(category.toLowerCase());
      advisorProfileClone.map((item) => {
        let result = resultFind(
          "displayName",
          searchCategory,
          item.categoriesCollection.items
        );
        if (result) {
          advisorFindCategory.push(item);
        }
      });
      advisors = advisorFindCategory;
    }

    if (checkStatus) {
      let advisorFindStatus = [];
      let advisorStatusClone = advisorProfile;
      let statusSearch = status === "false" ? false : true;
      if (advisors.length > 0) {
        advisorStatusClone = advisors;
      }

      advisorStatusClone.map((item) => {
        let statusOfAdvisor = item.status ? item.status : false;
        let result = statusOfAdvisor === statusSearch ? true : false;
        if (result) {
          advisorFindStatus.push(item);
        }
      });
      advisors = advisorFindStatus;
    }

    return advisors;
  }

  updateAdvisorStatus(id, data, setdata, name, category) {
    let dataClone = JSON.parse(JSON.stringify(data));
    const advisorUpdate = dataClone.find((value) => value.sys.id === id);
    const index = dataClone.indexOf(advisorUpdate);
    if (dataClone[index].status) {
      dataClone[index].status = !data[index].status;
    } else {
      dataClone[index].status = true;
    }
    setdata(dataClone);

    let dataSearch = this.getAdvisors(name, category, dataClone);
    return dataSearch;
  }
}

const resultFind = (key, searchText, array) => {
  let result = false;
  array.map((item) => {
    const a = item[`${key}`];
    let isHave = removeAccents(item[`${key}`].toLowerCase()).includes(
      searchText
    );
    if (isHave) {
      result = true;
    }
  });
  return result;
};

export default new AdvisorService();
