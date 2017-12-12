import React, { Component } from 'react';
import axios from 'axios';
// import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import CreateStudent from './CreateStudent';
import removeStudent from '../reducers/allCampuses';

// *******Tried using connect/mapProps/withRouter********
// Got props to work, but was no re-rendering jsx while using withRouter

class GetCampus extends Component{
	
	constructor (props) {
		super(props);
		this.state = {
			campus: {}
		}
		this.handleOnClick= this.handleOnClick.bind(this);
	}
	componentDidMount () {
		axios.get(`/api/campus/${this.props.match.params.id}`)
		.then(res => res.data)
		.then(campus => this.setState({campus}))
  	}

  	handleOnClick (event) {
		event.preventDefault();
		axios.delete(`/api/student/${event.target.value}`)
		.then (res => res.data)
		.catch (err => console.error(err));
		window.location.replace(this.state.campus.id);
	}

  	render () {
 		const campus = this.state.campus;
		return (
			<div>
				<h1>Campus: {campus.name}</h1>
				<img src={ campus.imageURL } className="img-thumbnail" width="375px"/>
				<h3>Description: {campus.description}</h3>
				<h3>Students: </h3>
					{
					campus.students && campus.students.map((student) => {
						return (
							<li key={student.id}>
								<NavLink to={`/student/${student.id}`}>
									{student.name}
								</NavLink>
								<button 
									onClick={this.handleOnClick} 
									value={student.id}>
									X
								</button>
							</li>
						)
					 })}
			</div>
			)
		}
}

export default GetCampus;