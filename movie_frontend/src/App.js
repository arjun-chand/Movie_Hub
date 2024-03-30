import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import LoadingBar from 'react-top-loading-bar';
import UploadMovieForm from './components/UploadMovieForm'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeCarousal from './components/HomeCarousal';
import {getPost} from './services/MovieService'

const App = () => {
  const pageSize = 1;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <HomeCarousal/>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        
        <Routes>
          <Route exact path="/" element={<Movies setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment" />} />
          <Route exact path="/comedy" element={<Movies setProgress={setProgress} key="comedy" pageSize={pageSize} category="comedy" />} />
          <Route exact path="/action" element={<Movies setProgress={setProgress} key="action" pageSize={pageSize} category="action" />} />
          <Route exact path="/romance" element={<Movies setProgress={setProgress} key="romance" pageSize={pageSize} category="romance" />} />
          <Route exact path="/adventure" element={<Movies setProgress={setProgress} key="adventure" pageSize={pageSize} category="adventure" />} />
          <Route exact path="/sifi" element={<Movies setProgress={setProgress} key="sifi" pageSize={pageSize} category="sifi" />} />
          <Route exact path="/anime" element={<Movies setProgress={setProgress} key="anime" pageSize={pageSize} category="anime" />} />
          <Route exact path="/upload" element={<UploadMovieForm  key="upload" pageSize={pageSize} category="upload" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
