import { makeObservable, observable, action } from "mobx";

import { UnitzService } from "@services";
import { Helper } from "@utils";
class UserStore {
  ADVISORS = {
    loading: false,
    data: null,
    loaded: false,
  };
  advisorsRender = null;
  constructor() {
    makeObservable(this, {
      ADVISORS: observable,
      advisorsRender: observable,
      loadAdvisor: action,
      searchAdvisor: action,
    });
  }
  loadAdvisor() {
    console.log("@loadAdvisor");
    try {
      this.ADVISORS = {
        ...this.ADVISORS,
        loading: true,
      };
      const res = UnitzService.getData();
      if (res?.data?.advisorProfileCollection?.items) {
        const dataAdvisors = Helper.parseAdvisors(
          res.data.advisorProfileCollection.items
        );
        this.ADVISORS = {
          ...this.ADVISORS,
          loading: false,
          data: dataAdvisors,
          loaded: true,
        };

        this.advisorsRender = dataAdvisors;
        // Helper.print(dataAdvisors);
        // console.log("@loadAdvisor", this.advisorsRender);
      }
    } catch (err) {
      this.ADVISORS = {
        loading: false,
        data: [],
        loading: true,
      };
      this.advisorsRender = null;
      console.log("error: ", err);
    }
  }
  searchAdvisor(text) {
    //   TODO: Lười quá em hard code xíu.
    const { data } = this.ADVISORS;
    if (text) {
      if (!!text && data && data.length) {
        var re = new RegExp(text + ".+$", "i");
        this.advisorsRender = data.filter(function (item) {
          return (
            item.displayName.search(re) != -1 ||
            (item.category && item.category.search(re) != -1)
          );
        });
      }
    } else {
      this.advisorsRender = data;
    }
  }
}

const store = new UserStore();

export default store;
