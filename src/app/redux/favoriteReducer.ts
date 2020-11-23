import { createAction, createReducer, props, on } from '@ngrx/store';
import { FunctionService } from '../feature/services/function.service';
export const favoriteToggle = createAction('favorite toggle', props<{ card: any }>());
export const favoriteGet = createAction('favorite get', props<{ list: string[] }>());
export const favoriteReset = createAction('favorite reset');
export const favoriteInitialState: any[] = FunctionService.getFav();

const rawFavoriteReducer = createReducer(
  favoriteInitialState,
  on(favoriteToggle, (state, { card }: any) => {
    if (card.fav) {
      return state.filter((item) => item.id !== card.id);
    }
    if (!state.find((item) => item.id === card.id)) {
      return [...state, { ...card, fav: true }];
    }
    return [...state];
  }),
  on(favoriteReset, () => favoriteInitialState),
  on(favoriteGet, (state, { list }) => [...list])
);

export function favoriteReducer(state, action): any {
  return rawFavoriteReducer(state, action);
}
