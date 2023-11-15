import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home.js'
import Reservation from './pages/Reservation.js'

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/reservation" element={<Reservation />} />
                    </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
