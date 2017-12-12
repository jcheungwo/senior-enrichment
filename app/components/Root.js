import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CampusList from './CampusList';
import StudentList from './StudentList';
import GetCampus from './GetCampus';
import GetStudent from './GetStudent';
import CreateCampus from './CreateCampus';
import CreateStudent from './CreateStudent';
import NavBar from './NavBar';
import store from '../store';
import {fetchCampuses} from '../reducers/allCampuses'
import {fetchStudents} from '../reducers/allStudents'

export default class Root extends Component {
	constructor () {
		super();
	}

	componentDidMount() {
		const campusesThunk = fetchCampuses();
		const studentsThunk = fetchStudents();
		store.dispatch(campusesThunk);
		store.dispatch(studentsThunk);
	}

	render () {
		return (
			<div>
				<NavBar />
				<main>
				  <Switch>
				  	<Route path ="/campus/create" component={CreateCampus}/>
				  	<Route path ="/campus/:id" component={GetCampus}/>
				  	<Route path ="/student/create" component={CreateStudent}/>
				  	<Route path ="/student/:id" component={GetStudent}/>
					<Route path ="/campus" component={CampusList}/>
					<Route path ="/student" component={StudentList}/>
				  </Switch>
				</main>
			</div>
			)
		}
	}