import * as React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './Header';

export const App = () => {
  return (
    <div>
      <Route path="*" component={Header} />
    </div>
  );
};
