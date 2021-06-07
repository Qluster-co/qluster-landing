import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Landing } from "./Landing"
import { SignupSuccess } from "./SignupSuccess"

export const App = () =>
    <Router>
        <Route path="/signup-success">
            <SignupSuccess />
        </Route>
        <Route path="/">
            <Landing />
        </Route>
    </Router>
