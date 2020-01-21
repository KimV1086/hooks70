import React from 'react';
import {Route, Switch} from "react-router-dom";
import TvShow from "./containers/MainTV/MainTV";
import ShowTV from './containers/ShowTV/ShowTV';


const App = () => (
   <Switch>
       <Route path="/" exact component={TvShow} />
       <Route path="/shows/:id" exact component={ShowTV}/>
       <Route render={() => <h1>Not found</h1>}/>
   </Switch>
);

export default App;