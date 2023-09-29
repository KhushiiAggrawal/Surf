import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Deals from "./pages/Deals";
import Category from "./pages/Category";
import PageNotFound from "./pages/PageNotFound";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";
import ScrollTopBtn from "react-scroll-to-top";
import ScrollUpBtn from "./components/ScrollUpBtn";
import { Settings } from "react-feather";
import Setting from "./pages/Setting";
import AccountSetting from './components/AccountSetting';
import BillingSetting from './components/BillingSetting';
import NotificationSetting from './components/NotificationSetting';

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <ScrollTopBtn className="max-sm:right-5 max-sm:bottom-9 scale=[.85] max-sm:scale-100"  smooth={true} style={{borderRadius:"50%",overflow:"hidden",outline:"none",boxShadow:"none"}} component={<ScrollUpBtn/>}	 />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/deals" element={<Deals />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="*" element={<PageNotFound />} />
          <Route exact path="/setting" element={<Setting />} />
          <Route exact path="/accountSetting" element={<AccountSetting />} />
          <Route exact path="/billingSetting" element={<BillingSetting />} />
          <Route exact path="/notificationSetting" element={<NotificationSetting />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
