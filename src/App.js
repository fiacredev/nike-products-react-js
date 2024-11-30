import { BrowserRouter,Router,Routes } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/Home';
import PopularProducts from './components/PopularProducts';
import Special from './components/SpecialOffers'
import CustomerSay from './components/CustomerSay';
import Footer from './components/Footer';
import './App.css';
import specialOffer from './components/SpecialOffers';

function App() {
  return (
    <>
    <div className="App">
      <Nav/>  
      <Home/>
      <PopularProducts/>
      <Special/>
      <CustomerSay/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
