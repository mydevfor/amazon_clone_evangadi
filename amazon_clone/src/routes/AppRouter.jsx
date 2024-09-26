import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import Auth from "../Pages/Auth/Auth";
import Payment from "../Pages/Payment/Payment";
import Cart from "../Pages/Cart/Cart";
import Orders from "../Pages/Orders/Orders";
import Results from "../Pages/Results/Results";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Product from "../components/Product/Product";

//for stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import PageNotFound from "../Pages/PageNotFound/PageNotFound";

//provide public key and load it to stirpe
const stripePromise = loadStripe(
  "pk_test_51Q2TBnP5IFpzEXhumev5ZTW3ofmBPCBgOLIuht0uwT0fq1xKXIgmbRThVR9bONs7qUI1HRENte2zCC0BDyb49p6N00HBAj5AF5"
);

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

          <Route
            path="/payments"
            element={
              // wrap payment component by Element from stripe and provide stripe prop with a value of stripePromise 
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            }
          />

        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/products" element={<Product />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
