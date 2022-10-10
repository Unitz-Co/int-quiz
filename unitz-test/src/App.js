import React from "react";
import Product from "./components/Product/Product";
import "./App.scss";
function App() {
  return (
    <div className="App">
      {/* <div className="container">
        <button>Vertical</button>
        <button>Horizontal</button>
      </div> */}
      <Product />
    </div>
  );
}

export default App;
