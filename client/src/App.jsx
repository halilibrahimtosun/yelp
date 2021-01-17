import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './router/Home';
import RestaurantDetailPage from './router/RestaurantDetailPage';
import UpdatePage from './router/UpdatePage';
import {RestaurantsContextProvider} from "./context/RestaurantsContext";

const App = () => {
    return (
       <RestaurantsContextProvider>
    <div className="container">
        <Router>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/restaurants/:id/update" component={UpdatePage}/>
            <Route exact path="/restaurants/:id" component={RestaurantDetailPage}/>
            </Switch>
        </Router>
    </div>
       </RestaurantsContextProvider>
    )
}

export default App;