import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import CreateParty from './CreateRoom/CreateParty';
import Room from './Room/Room';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/rooms/create' element={<CreateParty />} />
          <Route path='/rooms/1' element={<Room />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
