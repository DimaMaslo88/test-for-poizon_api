import { combineReducers, legacy_createStore as createStore } from 'redux';
import { TextReducer } from 'bll/reducers/text-reducer';


const rootReducer = combineReducers({
  text: TextReducer,

});
export type StateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);


// @ts-ignore
window.store = store;
