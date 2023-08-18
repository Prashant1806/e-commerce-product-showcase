import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import './App.css'; // You can create this CSS file for styling

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
