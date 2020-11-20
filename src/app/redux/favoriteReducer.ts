import { createAction, createReducer, props, on } from '@ngrx/store';

export const favoriteAdd = createAction('favorite add', props<{ full_name: string }>());
export const favoriteDel = createAction('favorite del', props<{ full_name: string }>());
export const favoriteGet = createAction('favorite get', props<{ list: string[] }>());
export const favoriteReset = createAction('favorite reset');
export const favoriteInitialState = [] as number[];

const rawFavoriteReducer = createReducer(
  favoriteInitialState,
  on(favoriteAdd, (state, { full_name }: any) => {
    if (!state.includes( full_name)) {
      return [...state,  full_name];
    }
    return [...state];
  }),
  on(favoriteDel, (state, { full_name }: any) => state.filter((item) => item !== full_name)),
  on(favoriteReset, () => favoriteInitialState),
  on(favoriteGet, (state, { list }) => [...list])
);

export function favoriteReducer(state, action): any {
  return rawFavoriteReducer(state, action);
}

