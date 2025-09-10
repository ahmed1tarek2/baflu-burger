import { useState } from "react";
import { User } from "lucide-react";
import "./CSS/index.css";
import MainNav from "./ui/navBar/mainNav";
import MobileNav from "./ui/navBar/mobileNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuPage from "./ui/menuComponant/MenuPage";
import Footer from "./ui/footer";
import ContactPage from "./ui/contactUs/contact";
import HomePage from "./ui/homepage/home";
import LoginPage from "./ui/login";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      {/* Main Navigation */}
      <MainNav
        icon={
          <User
            className="text-white cursor-pointer"
            onClick={() => showLogin ? setShowLogin(false) : setShowLogin(true)}
          />
        }
        userName="ahmed tarek"
      />

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Menu" element={<MenuPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Login Page Modal */}
      {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}
    </Router>
  );
};

export default App;
