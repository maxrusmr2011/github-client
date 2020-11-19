import { createReducer, props, on } from '@ngrx/store';
// import { increment, decrement, reset } from './counter.actions';
import { createAction } from '@ngrx/store';

export const increment = createAction('Counter Component Increment', props<{ add: number }>());
export const decrement = createAction('Counter Component Decrement');
export const reset = createAction('[Counter Component] Reset');

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state, { add }: any) => state + add),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
