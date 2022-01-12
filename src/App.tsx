import React from 'react';

import Landing from './components/Landing';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
