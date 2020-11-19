import { createAction, createReducer, props, on } from '@ngrx/store';

export const favoriteAdd = createAction('favorite add', props<{ id: string }>());
export const favoriteDel = createAction('favorite del', props<{ id: string }>());
export const favoriteReset = createAction('favorite reset');
export const favoriteInitialState = [] as number[];

const rawFavoriteReducer = createReducer(
  favoriteInitialState,
  on(favoriteAdd, (state, { id }: any) => {
    if (!state.includes(id)) {
      return [...state, id];
    }
  }),
  on(favoriteDel, (state, { id }: any) => state.filter((item) => item !== id)),
  on(favoriteReset, () => favoriteInitialState)
);

export function favoriteReducer(state, action): any {
  return rawFavoriteReducer(state, action);
}
