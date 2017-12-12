import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';

const AllStudents = function(props){
	return (
		<ul>
			<h3>All Students</h3>
			{props.students.map((student) => {
				return (
					<li key = {student.id}>
						<NavLink to={`/student/${student.id}`}>
							{student.name}
						</NavLink>
					</li>
					)
			})}
		</ul>
		)
}

function mapStateToProps(state) {
	return {
		students: state.students
	}
}

export default withRouter(connect(mapStateToProps)(AllStudents));