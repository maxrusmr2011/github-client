import { createAction, createReducer, props, on } from '@ngrx/store';

export const dataCreate = createAction('data create', props<{ data: any[] }>());
export const dataAdd = createAction('data add', props<{ data: any[] }>());
export const dataReset = createAction('data reset');
type dataType = {
  [key: string]: string|number
};
export const dataInitialState = [] as any[];

const rawDataReducer = createReducer(
  dataInitialState,
  on(dataCreate, (state, { data }: any): any[] => [...data]),
  on(dataAdd, (state, { data }: any): any[] => [...state, ...data]),
  on(dataReset, () => dataInitialState)
);

export function dataReducer(state, action): any {
  return rawDataReducer(state, action);
}
