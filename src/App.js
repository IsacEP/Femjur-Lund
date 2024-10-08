import './App.css';
import './index.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import MainCard from './Components/MainCard';
import Footer from './Components/Footer';

import About from './Pages/About';
import Board from './Pages/Board';
import Partners from './Pages/Partners';
import History from './Pages/History';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<MainCard />} />
                <Route path="/about" element={<About />} />
                <Route path="/history" element={<History />} />
                <Route path="/board" element={<Board />} />
                <Route path="/partners" element={<Partners />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
