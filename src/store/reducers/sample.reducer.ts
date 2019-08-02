import { SampleAction, SampleActionType } from "../actions/sample.actions";

export interface SampleState {
  isLoading: boolean;
  data: any;
}

export const sampleInitialState: SampleState = {
  isLoading: false,
  data: {}
};

export const sampleReducer = (
  state = sampleInitialState,
  action: SampleActionType
) => {
  switch (action.type) {
    case SampleAction.GET:
      return { ...state, isLoading: true, data: {} };

    case SampleAction.GET_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };

    case SampleAction.GET_FAIL:
      return { ...state, isLoading: false, data: {} };

    default:
      return state;
  }
};
