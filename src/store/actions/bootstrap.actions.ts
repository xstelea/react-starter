import { Action } from 'redux';

export enum BootstrapActionTypes {
  BOOTSTRAP_START = '[Bootstrap] Bootstrap Start',
}

export class BootstrapStartAction implements Action {
  readonly type = BootstrapActionTypes.BOOTSTRAP_START;
  constructor(public payload: void = undefined) {
    Object.assign(this, { payload });
  }
}

export type BootstrapAction = BootstrapStartAction;
