import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/account/Signup";
import Login from "./pages/account/Login";
import TestStart from "./pages/test/TestStart";
import TestPage from "./pages/test/TestPage";
import TestResult from "./pages/test/TestResult";
import HomePage from "./pages/home/HomePage";
import SpacesPage from "./pages/spaces/SpacesPage";
import ReviewsPage from "./pages/reviews/ReviewsPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ReviewsResult from "./pages/reviews/ReviewsResult";

function App() {
  return (
    <div>
      <Routes>
        {/* account page */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* type test page */}
        <Route path="/test/intro" element={<TestStart />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/test/result" element={<TestResult />} />

        {/* navbar content page */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/spaces" element={<SpacesPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/reviews/result" element={<ReviewsResult />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
