import Advisor from "../types/Advisor";
import DataRepo from "../repo/Data.repo";

class DataService {
    private dataRepo: DataRepo;
    constructor() {
        this.dataRepo = new DataRepo()
    }

    public async getData(): Promise<Advisor[]> {
        return await this.dataRepo.getData();
    }
}

export default DataService;