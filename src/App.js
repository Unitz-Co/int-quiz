// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={<Navigate to={"/home"}></Navigate>}
          ></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
        {/* <ToastContainer></ToastContainer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
