import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


import rootReducer from './../redux';


const loggerMiddleware = createLogger();

export default function createReduxStore() {
  let enhancers;

  if (process.env.NODE_ENV !== 'production') {
    
    // loggerMiddleware must be the last middleware in chain to log actions
    enhancers =
      composeWithDevTools(
        applyMiddleware(
          thunkMiddleware, 
          loggerMiddleware,
        )
      );
  } else {
    enhancers = 
      applyMiddleware(
        thunkMiddleware,
      );
  }

  return createStore(rootReducer, enhancers);
}
