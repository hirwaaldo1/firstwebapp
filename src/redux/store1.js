import {createStore,applyMiddleware,compose} from  'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
const initionlState ={}
const middleware=[thunk]
const store = createStore(rootReducer,initionlState,
    compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
)
export default store