import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer.js/Footer';
import Pricing from './components/Pricing';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import Signup from './components/pages/Signup/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Pricing />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Services' component={Services}/>
        <Route path='/Services' component={Products}/>
        <Route path='/Services' component={Signup}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
