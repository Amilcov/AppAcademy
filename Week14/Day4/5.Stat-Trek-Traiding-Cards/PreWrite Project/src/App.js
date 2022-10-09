import { Switch, Route, Redirect } from "react-router-dom";

import Deck from "./components/Deck";
import Store from "./components/Store";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <h1 className="title is-1">Star Trek Trading Card Store!</h1>
      <p>
        Here you can buy and sell cards in order to build your ultimate deck!
      </p>
        <Navbar />
        <Switch>
          <Route exact path="/store">
            <Store />
          </Route>
          <Route path="/deck/:id">
            <Deck />
          </Route>
          <Route path="/">
            <Redirect to="/store" />
          </Route>
        </Switch>
    </>
  );
};

export default App;