import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // นำเข้า React Router
import Navbar from "./components/navbar/Navbar.js";
import SelectService from "./components/SelectService/SelectService.js";
import BuyInsurance from "./components/BuyInsurance/BuyInsurance"; // นำเข้า BuyInsurance
import CarInfo from "./components/CarInfo/CarInfo.js" // นำเข้า CarInfoPage

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<SelectService />} />
          <Route path="/buy-insurance" element={<BuyInsurance />} />
          <Route path="/car-info" element={<CarInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
