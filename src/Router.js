import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginComponent from './components/LoginComponent';
import Search from './components/Search';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ padding: 65 }}>
      <Scene key="login" component={LoginComponent} title="Please Login" />
      <Scene key="search" component={Search} title="Create Employee" main />
    </Router>
  );
};

export default RouterComponent;
