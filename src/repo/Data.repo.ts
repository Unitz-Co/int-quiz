import Advisor from '../types/Advisor';
import data from '../data/data.json'
import Data from '../types/data';

class DataRepo {
    async getData(): Promise<Advisor[]> {
      const a = new Promise<Data>((resolve) => {
        resolve(data as Data);
      }).then((data) => {
        return data.data.advisorProfileCollection.items
      })
      return a;
    }
}

export default DataRepo;