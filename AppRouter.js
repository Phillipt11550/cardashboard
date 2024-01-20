import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarList from './CarList';
import CarDetails from './CarDetails';
import Dashboard from './Dashboard';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/cars" exact component={CarList} />
        <Route path="/cars/:id" component={CarDetails} />
      </Switch>
    </Router>
  );
};

export default AppRouter;