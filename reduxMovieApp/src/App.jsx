import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/movie/:imbdID' element={<MovieDetail />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  )
}

export default App
