import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import LogIn from './pages/login/LogIn';
import TopBar from './components/topbar/TopBar';

function App() {
    return (
        <>
            <TopBar />

            <div className="container">
                <Routes>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login" element={<LogIn />}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
