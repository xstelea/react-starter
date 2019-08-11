import { ActionsObservable } from 'redux-observable';
import { switchMap } from 'rxjs/operators';

import {
  BootstrapAction,
  BootstrapActionTypes,
} from '../actions/bootstrap.actions';

export const bootstrapEpic = (action$: ActionsObservable<BootstrapAction>) =>
  action$
    .ofType(BootstrapActionTypes.BOOTSTRAP_START)
    .pipe(switchMap(() => []));
