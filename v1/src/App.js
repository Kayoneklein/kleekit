import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "materialize-css/dist/css/materialize.css";
import { connect } from "react-redux";
import setAuthHeader from "./util/setAuthHeader";
import { loginFailure, loginSuccess } from "./redux/actions/authAction";

//style
import { useTransition, animated } from "react-spring";


import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Blog from "./components/blog";
import About from "./components/about";


const App = (props) => {
  const history = useHistory();
  const { location } = history;
  const transitions = useTransition(location, (location) => location.pathname, {
    // from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    // enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    // leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
     from: { opacity: 0, transform: "scale(0.6)" },
    enter: { opacity: 1, transform:  "scale(1)" },
    leave: { opacity: 0, transform:  "scale(0.6)" },
  });

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/portfolio" component={Portfolio} />
        
      </Switch>
    </animated.div>
  ));
};
function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth_reducer.isAuthenticated,
    profile: state.auth_reducer.userProfile,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    LOGIN_FAILURE: () => dispatch(loginFailure()),
    LOGIN_SUCCESS: (user) => dispatch(loginSuccess(user)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
