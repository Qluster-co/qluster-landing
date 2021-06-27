import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Landing } from "./Landing"
import { SignupSuccess } from "./SignupSuccess"
import ReactGA from "react-ga"

const TRACKING_ID = "" // Google Analytics ID
ReactGA.initialize(TRACKING_ID)

export const App = () =>
    <Router>
        <Route path="/signup-success">
            <SignupSuccess />
        </Route>
        <Route path="/">
            <Landing />
        </Route>
    </Router>
