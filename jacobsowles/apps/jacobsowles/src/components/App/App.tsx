import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Fragment } from 'react';

import {
  Switch,
  Route,
} from "react-router-dom";

import { LoginButton, LogoutButton, SignupButton } from "../../auth";

import { SeatTime } from '../';

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Fragment>
      {/*<AppBar position="static">
        
        <Toolbar>
          <Typography variant="h6">
            Jacob Sowles
          </Typography>

          {isAuthenticated ? <LogoutButton /> : (
            <Fragment>
              <LoginButton />
              <SignupButton />
            </Fragment>
          )}

          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>*/}

      <main>
        <Switch>
          <Route path="/seat-time">
            <SeatTime />
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </main>
    </Fragment>
  )
};

export { App };
