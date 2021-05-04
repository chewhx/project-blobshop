import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalProvider from "./context/GlobalProvider";

// Main Page
import Header from "./components/Header";
import Home from "./screens/Home";
import Footer from "./components/Footer";

// Product screens
import ProductInfo from "./screens/product/ProductInfo";

// Menu screens
import Products from "./screens/menu/Products";
import Cart from "./screens/menu/Cart";
import Checkout from "./screens/menu/Checkout";

// Admin screens
import EditProduct from "./screens/admin/EditProduct";
import AddProduct from "./screens/admin/AddProduct";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Switch>
        <Route exact path="/products/:id" component={ProductInfo} />
        <Route exact path="/edit" component={EditProduct} />
        <Route exact path="/add" component={AddProduct} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </GlobalProvider>
  );
};

export default App;
