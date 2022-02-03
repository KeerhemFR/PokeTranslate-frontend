import './reset.css';
import './style.css';
import Header from 'components/Header';
import Navbar from 'components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from 'components/Home';
import SearchPage from 'components/SearchPage';
import Details from 'components/Details';
import Footer from 'components/Footer';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
