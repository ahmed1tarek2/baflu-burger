import {  User } from "lucide-react";
import './CSS/index.css'
import MainNav from "./ui/navBar/mainNav";
import MobileNav from "./ui/navBar/mobileNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuPage from "./ui/menuComponant/MenuPage";
import Footer from "./ui/footer";
import ContactPage from "./ui/contactUs/contact";
import HomePage from "./ui/homepage/home";

const App = () => {
  return (
    <Router>
      <MainNav icon={<User className="text-white" />} userName="ahmed tarek" />
      <MobileNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Menu" element={<MenuPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
