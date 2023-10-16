import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import LogIn from './pages/login/LogIn';
import TopBar from './components/topbar/TopBar';

function App() {
    return (
        <>
            <TopBar />

            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/login" element={<LogIn />}></Route>
               
            </Routes>
        </>
    );
}

export default App;
