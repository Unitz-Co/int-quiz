import  {combineReducers} from 'redux';
import search from './search';
import searchKeyword from './searchKeyword';
import advisors from './advisors';


const appReducers = combineReducers({
    advisors,
    search,
    searchKeyword,
});

export default appReducers;