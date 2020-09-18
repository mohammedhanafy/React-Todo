import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from '../Components/Navbar';
import Todos from '../Components/Todos';
import AddTodo from '../Components/AddTodo';
import EditTodo from '../Components/EditTodo';

const routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Todos} />
                <Route path="/add" component={AddTodo} />
                <Route path="/edit/:id" component={EditTodo} />
            </Switch>
        </Router>
    )
}

export default routes;