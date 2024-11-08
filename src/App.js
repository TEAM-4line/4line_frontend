import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/account/Signup";
import Login from "./pages/account/Login";
import TestStart from "./pages/test/TestStart";
import TestPage from "./pages/test/TestPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test/intro" element={<TestStart />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;
