import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"

import FetchData from "./components/FetchData"
import Layout from "./components/Layout"
import StartPage from "./pages/StartPage"
import DetailedPage from "./pages/DetailedPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"

function App() {
<<<<<<< HEAD
    return (
        <div classNAme="app">
            <StartPage />
            <Switch>
                <Route
                    path="/product/:id"
                    render={(props) => {
                        return (
                            <Layout>
                                <DetailedPage {...props} />
                            </Layout>
                        )
                    }}></Route>
                <Route path="/cart">
                    <CartPage />
                </Route>
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
        </div>
    )
=======
  return (
    <div>
      <Switch>
        {/*<Route
          path="/product/:id"
          render={(props) => {
            return (
              <Layout>
                <DetailedPage {...props} />
              </Layout>
            );
          }}
        ></Route>*/}
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/">
          <StartPage />
        </Route>
      </Switch>
    </div>
  );
>>>>>>> b7c748d0089ed4bba57ed1c78f2db859b3aeaca8
}

export default App
