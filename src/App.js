import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import LogIn from './pages/login/LogIn';
import TopBar from './components/topbar/TopBar';

function App() {
    return (
        <>
            <TopBar />

            <Routes basename="/social-react-app">
             
                <Route path="/login" element={<LogIn />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </>
    );
}

export default App;
