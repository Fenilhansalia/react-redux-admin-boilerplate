import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


import PrivateRoute from "./PrivateRoute";


const Page404 = lazy(() => import('../container/Page404'));
const Login = lazy(() => import('../container/Login'));
const Dashboard = lazy(() => import('../container/Dashboard'));





const Routes = React.memo(() => {
    return(
      <Router>
          <Suspense fallback="loading...">
            <Switch>
              <Route exact path="/login" name="Login Page" component={Login}/>
              {/* <Route
                exact
                path="/forgot-password"
                name="Forgot Password Page"
                component={ForgotPassword}
              /> */}
              <Route exact path="/404" component={Page404}/>
              <PrivateRoute path="/" name="Main Page" component={Dashboard}/>
            </Switch>
          </Suspense>
      </Router>
    );
  });
  
  export default Routes;