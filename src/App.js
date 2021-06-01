import HandleContextProvider from './contexts/HandleContext';
import SearchContainer from './components/search/SearchContainer';
import MainContainer from './components/main/MainContainer';

import './index.css';


function App() {
  return (
    <div className="App">
      <HandleContextProvider>
        <SearchContainer />
        <MainContainer />
      </HandleContextProvider>
    </div>
  );
}

export default App;
