import { ActionsObservable } from 'redux-observable';
import { switchMap } from 'rxjs/operators';

import {
  GetSampleSuccessAction,
  SampleAction,
  SampleActionType,
} from '../actions/sample.actions';

export const sampleEpic = (action$: ActionsObservable<SampleActionType>) =>
  action$
    .ofType(SampleAction.GET)
    .pipe(switchMap(() => [new GetSampleSuccessAction({})]));
