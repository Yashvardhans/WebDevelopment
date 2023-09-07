import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Auth/Login';
import Home from './pages/Home/Home';

const AllRoutes = () => {
    return (
        <div>
            <Routes>
            <Route path='/' element={<Home />}/>
                <Route path='/Auth' element={<Login />}/>
            </Routes>
            
        </div>
    );
};

export default AllRoutes;<Route path='/Auth' element={<Auth />}/>