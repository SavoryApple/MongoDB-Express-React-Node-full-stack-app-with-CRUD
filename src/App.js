import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    //localhost:3000
    <BrowserRouter>
      <div className="App">
        <Route exact path="/products">
          <Main />
        </Route>
        <Route exact path="/products/:id">
          <Detail />
        </Route>
        <Route path="/products/:id/edit">
          <Update />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;