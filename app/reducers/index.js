/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'

import campuses from './allCampuses';
import students from './allStudents';

const rootReducer = combineReducers({
	campuses,
	students
})

export default rootReducer

export * from './allCampuses';
export * from './allStudents';