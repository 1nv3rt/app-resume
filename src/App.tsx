import React from 'react';
import './App.css';
import './feature/profile/presentation/profile_page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Profile from './feature/profile/presentation/profile_page';
import Briefcase from './feature/briefcase/presentation/briefcase_page';
import Certificate from './feature/certificates/presentation/certificates_page';
import Experience from './feature/experience/presentation/experience_page';
import Home from './feature/home/presentation/home_page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path= "/app-resume/" exact>
          <Home/>
        </Route>
        <Route exact path= "/app-resume/profile">
          <Profile />
        </Route>
        <Route exact path= "/app-resume/profile/experience">
          <Experience />
        </Route>
        <Route exact path= "/app-resume/profile/certificates">
          <Certificate />
        </Route>
        <Route exact path= "/app-resume/profile/briefcase">
          <Briefcase />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
