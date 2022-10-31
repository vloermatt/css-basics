import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import SideBar from '../components/SideBar';
import Header from '../components/Header';

const PrivateRoute = ({
    component: Component,
    title,
    path,
    allowedCognitoGroups,
    ...rest
  }: any & { component: any }) => (
    <Route
      {...rest}
      render={props => {
        return (
          <React.Fragment>
              <Header/>
              <SideBar>
               <Component {...props} {...rest} />
              </SideBar>
          </React.Fragment>
        );
      }}
    />
  );

const AppNavigation: React.FC = () => {
    
    return(
        <Fragment>
            <Router>
                <Switch>
                    {PublicRoutes.map((route, index) => {
                        return <PrivateRoute key={index} {...route}/>;
                    })}
                </Switch>
            </Router>
        </Fragment>
    );
}

export default AppNavigation;
