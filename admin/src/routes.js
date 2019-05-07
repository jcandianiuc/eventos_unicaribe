import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import Home from "./containers/Home";
import Create from "./containers/Create";
import Users from "./containers/Users";

const Routes = ({ location }) => (
  <Switch location={location}>
    <Route exact path="/users" component={Users} />
    <Route exact path="/event/create" component={Create} />
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);

const mapStateToProps = ({ router }) => ({ location: router.location });

export default connect(mapStateToProps)(Routes);
