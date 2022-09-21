import Header from "./components/Header/Header";

import style from "./App.module.css";
import Home from "./components/Body/Home/Home";

function App() {
  return (
    <div className={style["app"]}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
