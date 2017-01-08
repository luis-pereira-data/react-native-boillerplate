import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';
import Search from './components/Search';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ padding: 65 }}>
      <Scene key="login" component={Login} title="Please Login" />
      <Scene key="search" component={Search} title="Create Employee" main />
    </Router>
  );
};

export default RouterComponent;
