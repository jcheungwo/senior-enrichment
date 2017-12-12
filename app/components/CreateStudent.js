import React, { Component } from 'react';
import {postStudent} from '../reducers/allStudents'
import store from '../store';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

const CreateStudent = function(props) {
	return(
		<form onSubmit={props.handleSubmit}>
			<div className="form-group">
				<label>First Name </label>
				<input
					className="form-control"
					name="firstName"
					type="text"
					placeholder="Enter First Name"
					value={props.firstName}
				/>
			</div>
			<div className="form-group">
				<label>Last Name </label>
				<input
					className="form-control"
					name="lastName"
					type="text"
					placeholder="Enter Last Name"
					value={props.lastName}
				/>
			</div>
			<div className="form-group">
				<label>Email </label>
				<input
					className="form-control"
					name="studentEmail"
					type="text"
					placeholder="Enter Email"
					value={props.studentEmail}
				/>
			</div>
			<div className="form-group">
				<label>GPA </label>
				<input
					className="form-control"
					name="studentGPA"
					type="number"
					step=".1"
					placeholder="Enter GPA"
					value={props.studentGPA}
				/>
			</div>
			<div className="form-group">
				<label>Campus </label>
				<select name="campusSelection">
					{props.campuses.map(campus => {
						return (
							<option value={campus.id} key={campus.id}>
								{campus.name}
							</option>
						)
					})}
				</select>
			</div>
			<div className="form-group">
				<button type="submit" className="btn btn-default">
					Add Student
				</button>
			</div>
		</form>
	)
}

function mapStateToProps(state) {
	return {
		campuses: state.campuses
	};
}

function mapDispatchToProps (dispatch,ownProps) {
	return {
		handleSubmit (event) {
			const campusId = event.target.campusSelection.value;
			event.preventDefault();
			dispatch(postStudent({
				firstName: event.target.firstName.value,
				lastName: event.target.lastName.value,
				email: event.target.studentEmail.value,
				gpa: event.target.studentGPA.value,
				campusId
			}))
			window.location.replace(`/campus/${campusId}`)
		}
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateStudent));