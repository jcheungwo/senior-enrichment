import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class extends Component {
	
	render () {
		return (
			<nav>
				<NavLink to="/campus/">
					<button>List All Campuses</button>
				</NavLink>
				<NavLink to="/student/">
					<button>List All Students</button>
				</NavLink>
				<NavLink to="/campus/create">
					<button>Add A campus</button>
				</NavLink>
				<NavLink to="/student/create">
					<button>Add A Student</button>
				</NavLink>
			</nav>
		)
	}
}