import { Action } from '@ngrx/store';

const initialState =
  'Welcome! If you want to get the most out of this website, either login or sign up.';

export interface AppState {
  message: string;
}

export function simpleReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'Spanish':
      return (state = 'Hola Mundo!');
    case 'Portuguese':
      return (state = 'Oi Mundo!');

    default:
      return state;
  }
}
