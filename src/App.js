import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// import FetchData from "./components/FetchData";
import Layout from "./components/Layout";
import StartPage from "./pages/StartPage";
import DetailedPage from "./pages/DetailedPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import "bootstrap/dist/css/bootstrap.css";
import Order from "./components/Order";

function App() {
  return (
    <>
      <Switch>
        <Route
          path="/product/:id"
          render={(props) => {
            return (
              <Layout>
                <DetailedPage {...props} />
              </Layout>
            );
          }}
        ></Route>
        <Route path="/checkout">
          <Layout>
            <CheckoutPage />
          </Layout>
        </Route>
        <Route path="/">
          <Layout>
            <StartPage />
          </Layout>
        </Route>
      </Switch>
    </>
  );
}

export default App;
