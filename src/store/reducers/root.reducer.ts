import { combineReducers } from "redux";
import { createSelector } from "reselect";
import { sampleReducer, SampleState } from "./sample.reducer";

export interface State {
  sample: SampleState;
}

export const reducers = combineReducers({
  sample: sampleReducer
});

export const sampleState = (state: State) => state.sample;
export const getSample = createSelector(
  sampleState,
  state => state.data
);
