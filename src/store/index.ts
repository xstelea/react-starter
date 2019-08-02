import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic } from './epics';
import { reducers } from './reducers/root.reducer';

const epicMiddleware = createEpicMiddleware();
// @ts-ignore: convert action class to plain object
const customMiddleWare = () => next => action => {
  next({ ...action });
};

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(epicMiddleware, customMiddleWare)),
);

// @ts-ignore
epicMiddleware.run(rootEpic);

export * from './actions';
export * from './reducers';
export * from './epics';
