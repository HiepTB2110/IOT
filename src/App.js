import Container from "./components/container/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login"
import ContainerLog from "./components/container/ContainerLog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/content" element={<Container />} />
        <Route path="/contentlog" element={<ContainerLog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
