import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "../store";
import ErrorSnackbar from "./MessageSnackbar";
import Home from "./Home";
import Header from "./Header";
import TodoList from "./TodoList";
import AddNewForm from "./AddNewForm";

export default function App() {
    return (
        <Provider store={store}>
            <ErrorSnackbar/>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/list" component={TodoList}/>
                    <Route exact path="/add" component={AddNewForm}/>
                </Switch>
            </Router>
        </Provider>
    );
}
