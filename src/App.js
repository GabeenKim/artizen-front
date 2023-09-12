import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import CommunityPage from './component/page/CommunityPage';
import Detail from './component/page/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/detail" element={Detail} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
