import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Home from './Home';
import Dating from './Dating';

// Need this to make vertical middle alignment
const style = (
  <style>
    {`
      #root {
        height: 100%;
      }
    `}
  </style>
);

const BaseScene = () => (
  <Grid textAlign="center" verticalAlign="middle" style={{ height: '100%' }}>
    {style}
    <Grid.Column style={{ minWidth: '600px' }}>
      <BrowserRouter>
        <Switch>
          <Route match="/dating" component={Dating} />
          <Route match="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Grid.Column>
  </Grid>
);

export default BaseScene;
