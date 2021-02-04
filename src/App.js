import React from "react";
import { Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import AuthorsView from "./views/AuthorsView";

const App = () => (
  <>
    {/* <Switch> */}
    <Route path="/" component={HomeView} />
    <Route path="/authors" component={AuthorsView} />
    {/* </Switch> */}
  </>
);

export default App;
