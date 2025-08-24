import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import storePersist from './storePersist';

const AUTH_INITIAL_STATE = {
  current: {},
  isLoggedIn: false,
  isLoading: false,
  isSuccess: false,
};

const auth_state = storePersist.get('auth') ? storePersist.get('auth') : AUTH_INITIAL_STATE;

const initialState = { auth: auth_state };

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  devTools: import.meta.env.PROD === false, // Enable Redux DevTools in development mode
});

console.log(
  '🚀 Welcome to CustFlow ! Did you know that we also offer commercial customization services? Contact us at hello@custflow.com for more information.'
);

export default store;
