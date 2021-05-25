import { observable, action } from "mobx";
import { UnitzService } from "@services";
class UserStore {
    @observable ADVISORS = null;
    @action loadAdvisor() { 
        const res = UnitzService.getData();
        console.log("res: ", res);
        if (res?.data?.advisorProfileCollection?.items) {
            
            this.ADVISORS = res.data.advisorProfileCollection.items;
            console.log("this.advisors: ", this.ADVISORS);
        }
        
    ;}
}

const store = new UserStore();

export default store;
