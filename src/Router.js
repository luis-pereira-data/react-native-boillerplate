import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginComponent from './components/LoginComponent';
import SearchComponent from './components/SearchComponent';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ padding: 65 }}>
      <Scene key="login" component={LoginComponent} title="Please Login" main />
      <Scene key="search" component={SearchComponent} title="Create Employee" />
    </Router>
  );
};

export default RouterComponent;
