import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UrlEnums from '../enums/UrlEnums';
import Home from '../components/pages/Home';
import Public from './Public';
import Login from '../components/auth/Login';
import NotFoundPage from '../components/common/NotFoundPage';
import Logout from '../components/auth/Logout';
import SignUp from '../components/auth/SignUp';
import Authenticated from './Authenticated';

const MainRoutes = () => (
  <Switch>
    <Route exact path={UrlEnums.MAIN} component={Home} />
    <Public exact path={UrlEnums.LOGIN} component={Login} />
    <Public exact path={UrlEnums.SIGN_UP} component={SignUp} />
    <Authenticated exact path={UrlEnums.LOGOUT} component={Logout} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);

export default MainRoutes;
