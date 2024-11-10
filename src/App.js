import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/account/Signup";
import Login from "./pages/account/Login";
import TestStart from "./pages/test/TestStart";
import TestPage from "./pages/test/TestPage";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";
import SpacesPage from "./pages/spaces/SpacesPage";
import ReviewsPage from "./pages/reviews/ReviewsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test/intro" element={<TestStart />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/spaces" element={<SpacesPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
