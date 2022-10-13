import './App.css'
import Header from './components/header/Header';
import Content from './components/content/Content';

function App() {
  return (
    <div className="w-full h-full min-h-[580px] bg-[#f5f5f5]">
      <Header />
      <Content />
    </div>
  );
}

export default App;
