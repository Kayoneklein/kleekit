import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const intialState = {};
const persistConfig = {
  key: "authType",
  storage: storage,
  whitelist: ["auth_reducer", "token_reducer"],
  blacklist: ["msg_reducer"],
};
const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk];
// const store = createStore(, middleware);
const store = createStore(
  pReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const persistor = persistStore(store);
export { store, persistor };
