import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
// import {connect} from 'react-redux';
// import {withRouter} from 'react-router';

class GetStudent extends Component{
	
	constructor (props) {
		super(props);
		this.state = {
			student: {}
		}
	}
	componentDidMount () {
		axios.get(`/api/student/${this.props.match.params.id}`)
		.then(res => res.data)
		.then(student => this.setState({student}))
  	}
  	render () {
 		const student = this.state.student;
		return (
			<div>
				<h1>Student: {student.name}</h1>
				<h3>Campus:
					<NavLink to={`/campus/${student.campusId}`}>
						{student.campus && student.campus.name}
					</NavLink>
				</h3>
				<h3>Email: {student.email}</h3>
				<h3>GPA: {student.gpa}</h3>
			</div>
		)
	}
}

export default GetStudent;