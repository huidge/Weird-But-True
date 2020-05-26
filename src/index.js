import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import List from "./pages/List";
import Movie from "./pages/Movie";
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
        <Route exact={true} path="/list" component={List} />
        <Route exact={true} path="/movie" component={Movie} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
