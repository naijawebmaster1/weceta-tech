import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import { Home, About, Services, Certificate, Contact } from "./pages";

// import './App.css';
import ScrollToTop from './utility/ScrollToTop';
import CustomeSwitch from './utility/CustomeSwitch';
import { routesConstants } from './utility/routesConstants';
import PageNotFound from './404';

function App() {
  return (
    <div>
      <div className="">
        <div><Toaster position="top-right" reverseOrder={true} /></div>
        <Router>
          <CustomeSwitch>
            <ScrollToTop>
              <Switch>
                <Route exact path={routesConstants.HOME} component={Home} />
                <Route path={routesConstants.ABOUT} component={About} />
                <Route path={routesConstants.CERTIFICATES} component={Certificate} />
                <Route path={routesConstants.SERVICES} component={Services} />
                <Route path={routesConstants.CONTACT} component={Contact} />
                <Route path="*" component={PageNotFound} />
              </Switch>
            </ScrollToTop>
          </CustomeSwitch>
        </Router>
      </div>
    </div>
  );
}
export default App;
