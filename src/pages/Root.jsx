import Footer from '/src/components/Footer';
import Page from '/src/pages/Sample';
import Contact from '/src/pages/Contact'
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Root
