import { combineReducers } from 'redux';
import routines from './routines';
import exercises from './exercises';

const reactApp = combineReducers({
  //import reducers and put them here
  exercises,
  routines
})

export default reactApp;
