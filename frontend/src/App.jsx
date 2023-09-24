import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Messaging from "./pages/Messaging";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Snap from "./pages/Snap";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/message" element={<Messaging />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/snap" element={<Snap />} />
      </Routes>
    </div>
  );
}
