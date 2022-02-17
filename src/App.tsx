import { Component } from 'react';
import AdvisorView from './view/view-advisors/view-advisors ';
class App extends Component<any, {isOnLine: boolean}, {isOnLine: boolean}> {

  public constructor(props: any) {
    super(props);
  }

  public render() {
    return <div className="App">
      <header className="App-header">
        <AdvisorView key={Number.toString()} />
      </header>
    </div>
  }
}

export default App;
