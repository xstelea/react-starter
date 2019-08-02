import { Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Dispatch } from 'redux';
import { GetSampleAction } from '../store';
import { Main } from './Main';

interface Props {
  getSample: () => void;
}

export class AppComponent extends React.Component<Props> {
  render() {
    return (
      <BrowserRouter>
        <Grid container>
          <Route path="*" component={Main} />
          <Grid container />
        </Grid>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSample: () => dispatch(new GetSampleAction()),
});

export const App = connect(
  null,
  mapDispatchToProps,
)(AppComponent);
