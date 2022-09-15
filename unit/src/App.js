import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdvisorList from "./page/advisor/list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdvisorList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
