import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Body from '../components/Body';
import Welcome from '../pages/Welcome';

export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/">
          <Route element={<Home />} path="/" index />
          <Route element={<Login />} path="/login" />
          <Route element={<Welcome />} path="/welcome" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
