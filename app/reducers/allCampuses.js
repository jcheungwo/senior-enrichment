import axios from 'axios';
const GET_CAMPUSES = 'GET_CAMPUSES';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const GET_CAMPUS = 'GET_CAMPUS';

function getCampuses (campuses) {
	return {
		type: GET_CAMPUSES,
		campuses
	}
}

function getCampus (campus) {
	return {
		type:GET_CAMPUS,
		campus
	}
}

function createCampus (campus) {
	return {
		type: CREATE_CAMPUS,
		campus
	}
}

export function fetchCampuses () {
	return function thunk (dispatch) {
		return axios.get('/api/campus')
		.then (res => res.data)
		.then (campuses => dispatch(getCampuses(campuses)))
		.catch(err => console.log(err));
	};
}

export function postCampus (campus) {
	return function thunk (dispatch) {
		return axios.post('/api/campus', campus)
		.then(res => res.data)
		.then(campus => dispatch(createCampus(campus)))
		.catch(err => console.log(err));
	}
}
export default function (state = [], action) {
	switch(action.type) {
		case GET_CAMPUS:
			return action.campus
		case GET_CAMPUSES:
			return action.campuses;
		case CREATE_CAMPUS:
			return [...state, action.campus]
		default:
			return state;
	}
}