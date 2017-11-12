import {combineReducers} from 'redux'
import MainDataReducer from './reducer_main_data'
// import FunctionalReducer from './reducer_functionals'
// import persist from './persist'

const rootReducer = combineReducers({
  GRAPH:MainDataReducer,
  // FnState:FunctionalReducer
  // persist:persist
})

export default rootReducer
