import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Create />}></Route>
        <Route path="/read" element={<Read />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
