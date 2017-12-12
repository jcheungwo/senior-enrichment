import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';

const CampusList = function(props){
	return (
		<ul>
			<h3>All Campuses</h3>
			{props.campuses.map((campus) => {
				return (
					<li key = {campus.id}>
						<NavLink to={`/campus/${campus.id}`}>
							{campus.name}
						</NavLink>
						<button onClick={props.handleOnClick} value={campus.id}>X</button>
					</li>
					)
			})}
		</ul>
		)
}

function mapStateToProps(state) {
	return {
		campuses: state.campuses
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleOnClick (event) {
			event.preventDefault();
			axios.delete(`/api/campus/${event.target.value}`)
			.then(res => res.data)
			.catch(err => console.error(err));
			window.location.replace('/campus');
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusList));