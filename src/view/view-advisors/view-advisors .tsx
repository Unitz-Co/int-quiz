import { Component, StrictMode } from "react";
import Advisor from "../../types/Advisor";
import DataService from "../../service/data.service";
import AdvisorComponent from "../../component/AdvisorComponent";
import * as style from './style';
import RadioComponent, { RadioEventSelectedItem } from "../../component/radiobutonComponent";
interface DataAdvisorView {
    dataView?: Advisor[]
    viewHorizon: boolean
    statusView: string
}

class AdvisorView extends Component<any, DataAdvisorView, DataAdvisorView> {
    private dataService: DataService;
    private searchValue: string = ""
    private data: Advisor[] = []
    constructor(props: any) {
        super(props);
        let state: DataAdvisorView = {
            dataView: [],
            viewHorizon: false,
            statusView: 'Online'
        };
        this.state = state
        this.dataService = new DataService();
    }

    private changeSearchValue(text: string) {
        this.searchValue = text;
    }

    private filterAdvisor(value: string, statusView: string): Advisor[] | undefined {
        return this.data?.filter(advisor => {
            return advisor.status === statusView && ( advisor.displayName.toLowerCase().includes(value) ||
            advisor.categoriesCollection.items.find(category => {
                return category.displayName.toLowerCase().includes(value)
            }) !== undefined
            );
        }) || [];
    }

    private searchAdvisor(e: React.FormEvent<HTMLFormElement>, statusView: string) {
        const searchValue = this.searchValue.trim().toLocaleLowerCase();
        this.setState({
            ...this.state,
            dataView: searchValue.localeCompare("") === 0 ? this.data : this.filterAdvisor(searchValue, statusView)
        });
        e.preventDefault();
    }

    private setViewHorizon() {
        this.setState({
            ...this.state,
            viewHorizon: !this.state.viewHorizon
        });
    }

    private setViewStatus(selectedItem: RadioEventSelectedItem) {
        let dataView = this.filterAdvisor(this.searchValue, selectedItem.value)
        this.setState({
            ...this.state,
            statusView: selectedItem.value,
            dataView: dataView
        })
    }

    public componentDidMount() {
        this.dataService.getData().then((data) => {
            this.data = data;
            this.setState({
                ...this.state,
                dataView: data.filter((advisor => {
                    return advisor.status === this.state.statusView
                }))
            });
        })
    }

    public render() {
        const viewHorizon = this.state.viewHorizon;
        return (
            <div className="flex-col">
                <div className="flex-row" style={style.alsCenter}>
                    <form onSubmit={e => this.searchAdvisor(e, this.state.statusView)}>
                        <div>
                            <input placeholder="Name or category" type="text" onChange={e => this.changeSearchValue(e.target.value)} />
                        </div>
                        <div>
                            <button className="ml-5" type="submit">Search</button>
                        </div>
                    </form>
                </div>
                <div className="flex-row" style={style.alsCenter}>
                    <RadioComponent 
                        defaultSelected={this.state.statusView}
                        name="status"
                        values={['Online', 'Offline']}
                        labels={['Online', 'Offline']}
                        onClick={(e: any, itemSelected: any, items: any) => this.setViewStatus(itemSelected)}
                    />
                </div>
                <div className="flex-row mr-5" style={style.juscntFlend}>
                    {
                        viewHorizon && <button onClick={() => this.setViewHorizon()}>Row</button>
                    }
                    {

                        !viewHorizon && <button onClick={() => this.setViewHorizon()}>Colunm</button>
                    }
                </div>
                <div className={`${viewHorizon ? 'flex-row' : 'flex-col'} ml-5 mr-5`}>
                    {
                        this.state.dataView?.map((advisor) => (
                            <StrictMode>
                                <AdvisorComponent advisor={advisor} viewHorizon={viewHorizon} />
                            </StrictMode>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default AdvisorView;