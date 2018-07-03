import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";

import reducer from "./reducers/index";
import { rootEpic } from "./epics/index";

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(reducer, applyMiddleware(epicMiddleware));
  epicMiddleware.run(rootEpic);
  return store;
}
