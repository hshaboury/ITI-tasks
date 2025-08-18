import { Link } from "react-router-dom";
import "./Navbar.css";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {

  const { language, changeLanguage } = useLanguage(); 
  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };  

  return (
    <nav className="navbar">
      <h1 className="logo">Movie App</h1>

      <div className="links">
        <Link to="/">Movies</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>

      <div className="language-selector"> 
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
      </div>  

    </nav>
  );
}