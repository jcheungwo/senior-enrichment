import axios from 'axios';
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const CREATE_STUDENT = 'CREATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

function getStudent (student) {
	return {
		type: GET_STUDENT,
		student
	}
}
function getStudents (students) {
	return {
		type: GET_STUDENTS,
		students
	}
}

function createStudent (student) {
	return {
		type:CREATE_STUDENT,
		student
	}
}

function deleteStudent (student) {
	return {
		type:DELETE_STUDENT,
		student
	}
}

export function fetchStudents () {
	return function thunk (dispatch) {
		return axios.get('/api/student')
		.then (res => res.data)
		.then (students => dispatch(getStudents(students)))
		.catch (err => console.error (err));
	};
}

export function postStudent(student) {
	return function thunk (dispatch) {
		return axios.post('/api/student', student)
		.then (res => res.data)
		.then (studentEntry => {
			dispatch(createStudent(studentEntry));
		})
		.catch (err => console.error (err));
	}
}
export default function (state = [], action) {
	switch(action.type) {
		case GET_STUDENT:
			return action.student;
		case GET_STUDENTS:
			return action.students;
		case CREATE_STUDENT:
			return [...state, action.student];
		default:
			return state;
	}
}