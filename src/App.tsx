import React from 'react';
import SearchBar from './components/SearchBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SongDetail from './components/SongDetail';



function App() {
  return (

    <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<SearchBar />} />
          <Route path='/:id' element={<SongDetail/>} />
        </Routes>
      
    
    </BrowserRouter>

  );
}

export default App;
