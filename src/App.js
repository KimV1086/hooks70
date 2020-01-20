import React from 'react';
import {Route, Switch} from "react-router-dom";
import TvShow from "./containers/TvShow/TvShow";
import ShowMovie from './components/ShowMovie/ShowMovie';

const App = () => (
   <div>
       <Switch>
           <Route path="/" exact component={TvShow} />
           <Route path="/shows/:id" exact component={ShowMovie}/>
           <Route render={() => <h1>Not found</h1>}/>
       </Switch>
   </div>

);

export default App;