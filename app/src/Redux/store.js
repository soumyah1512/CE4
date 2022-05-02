import { legacy_createStore as createStore, applyMiddleware } from "redux"
import { reducer } from "./reducer"
// create store here
// export const store = {};



export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
