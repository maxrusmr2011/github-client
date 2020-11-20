import { createAction, createReducer, props, on } from '@ngrx/store';

export const pageFirst = createAction('page first');
export const pageNext = createAction('page next');
export const totalChange = createAction('total change', props<{ total: number }>());
export const wordChange = createAction('word change', props<{ word: string }>());

export const pageInitialState = { page: 1, total: 0, word: '' };

const rawPageReducer = createReducer(
  pageInitialState,
  on(pageFirst, (state) => ({ ...state, page: 1 })),
  on(pageNext, (state) => ({ ...state, page: state.page + 1 })),
  on(totalChange, (state, { total }: any) => ({ ...state, total })),
  on(wordChange, (state, { word }: any) => ({ ...state, word }))
);

export function pageReducer(state, action): any {
  return rawPageReducer(state, action);
}
