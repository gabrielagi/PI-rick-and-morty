import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea es para conectar don la extension

const store = createStore(
  reducer,
  composeEnhacer(applyMiddleware(thunkMiddleware))
); // Esta linea nos permite hacer peticiones a un servidor

export default store;
