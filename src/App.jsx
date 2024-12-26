import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './pages/Root';
import './App.css';
import MainHeader from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <MainHeader />
        <main className="content">
          <Root />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
