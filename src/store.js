import { Provider } from ' ReactRedux';
import { createStore, applyMiddleware } from 'Redux';
import { createEpicMiddleware } from 'ReduxObservable';
import { pingEpic } from './epics/index'
import pingReducer from './reducers/index'
const epicMiddleware = createEpicMiddleware(pingEpic);

export default createStore(
  pingReducer,
  applyMiddleware(epicMiddleware)
);