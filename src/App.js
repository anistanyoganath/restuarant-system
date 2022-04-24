import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./reduxenv/store";

import Home from "./pages/home";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Header from "./modules/header";
import Success from "./pages/success";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/checkout" exact element={<Checkout />} />
            <Route path="/success" exact element={<Success />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
