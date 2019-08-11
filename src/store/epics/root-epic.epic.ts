import { combineEpics } from 'redux-observable';

import {
  bootstrapEpic,
  handleCallbackEpic,
  loginEpic,
  logoutEpic,
  userInfoEpic,
} from './';
import { checkSessionEpic } from './auth.epic';

export const rootEpic = combineEpics(
  userInfoEpic,
  loginEpic,
  logoutEpic,
  bootstrapEpic,
  handleCallbackEpic,
  checkSessionEpic,
);
