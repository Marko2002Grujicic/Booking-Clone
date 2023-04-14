import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import HotelList from "./pages/HotelList/HotelList";
import Hotel from "./pages/Hotel/Hotel";
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<HotelList/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </div>
  );
}

export default App;
