import React, { Component } from 'react';
import {postCampus} from '../reducers/allCampuses'
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';

const CreateCampus = function(props) {
	return(
		<form onSubmit={props.handleSubmit}>
			<div className="form-group">
				<label>Campus Name </label>
				<input
					className="form-control"
					name="campusName"
					type="text"
					placeholder="Enter Name of the New Campus"
					value={props.campusName}
				/>
			</div>
			<div className="form-group">
				<label>Campus Description </label>
				<input
					className="form-control"
					name="campusDescription"
					type="text"
					placeholder="Enter a Description"
					value={props.campusDescription}
				/>
			</div>
			<div className="form-group">
				<label>Link to Campus Image</label>
				<input
					className="form-control"
					name="campusImg"
					type="text"
					placeholder="Enter Img URL"
					value={props.campusImg}
				/>
			</div>
			<div className="form-group">
				<button type="submit" className="btn btn-default">Create Campus</button>
			</div>
		</form>
	)
}

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps (dispatch) {
	return {
		handleSubmit (event) {
			event.preventDefault();
			dispatch(postCampus({
				name:event.target.campusName.value,
				description:event.target.campusDescription.value,
				imageURL: event.target.campusImg.value
			}))
			window.location.replace("/campus");
		}
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateCampus));