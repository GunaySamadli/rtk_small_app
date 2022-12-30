import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/updateProduct/:id" exact component={UpdateProduct} />
        {/* <Route path="/error" exact>
            <Error />
          </Route>
          <Redirect to="/error" /> */}
      </Switch>
    </Router>
  );
}

export default App;
