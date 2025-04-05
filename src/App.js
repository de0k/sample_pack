import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Sub01 from './pages/Sub01';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub01" element={<Sub01 />} />
      </Routes>
    </Router>
  );
}

export default App;
