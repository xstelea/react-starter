export enum SampleAction {
  GET = '[Sample] Get',
  GET_SUCCESS = '[Sample] Get Success',
  GET_FAIL = '[Sample] Get Fail',
}

export class GetSampleAction {
  readonly type = SampleAction.GET;
  constructor(public payload: void = undefined) {
    Object.assign(this, { payload });
  }
}

export class GetSampleSuccessAction {
  readonly type = SampleAction.GET_SUCCESS;
  constructor(public payload: any) {
    Object.assign(this, { payload });
  }
}

export class GetSampleFailAction {
  readonly type = SampleAction.GET_FAIL;
  constructor(public payload: any) {
    Object.assign(this, { payload });
  }
}

export type SampleActionType =
  | GetSampleAction
  | GetSampleSuccessAction
  | GetSampleFailAction;
