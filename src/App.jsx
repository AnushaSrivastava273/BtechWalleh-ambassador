import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Announcements from "./pages/Announcements";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Import Footer
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* Page content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/announcements" element={<Announcements />} />
          </Routes>
        </main>

        <Footer /> {/* ✅ Always visible at bottom */}
      </div>
    </Router>
  );
};

export default App;
