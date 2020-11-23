import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


const reducers = combineReducers({

})


let preLoad = {

}

const store = createStore(reducers, preLoad, composeWithDevTools(
  applyMiddleware(thunk)
))

export default store
