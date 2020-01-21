import React from 'react';
import {Route, Switch} from "react-router-dom";
import TvShow from "./containers/MainTV/MainTV";
import FormTV from './containers/FormTV/FormTV';


const App = () => (
   <Switch>
       <Route path="/" exact component={TvShow} />
       <Route path="/shows/:id" exact component={FormTV}/>
   </Switch>
);

export default App;