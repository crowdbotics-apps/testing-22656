import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard11173958Reducer from '../features/Dashboard11173958/redux/reducers'
import Dashboard12173957Reducer from '../features/Dashboard12173957/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard11173958: Dashboard11173958Reducer,
Dashboard12173957: Dashboard12173957Reducer,

});