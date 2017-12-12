'use strict';

const db = require('../index');
const Sequelize = require('sequelize');

var Student = db.define('student', {
	firstName: {type: Sequelize.STRING, allowNull: false},
	lastName: {type: Sequelize.STRING, allowNull: false},
	email: {type: Sequelize.STRING, allowNull: false, validate: {isEmail:true}},
	gpa: {type:Sequelize.FLOAT, validate: {min:0.0, max:4.0}},
	name: {
		type:Sequelize.VIRTUAL, 
		get() {
			return this.firstName + ' ' + this.lastName;
	}},
})

module.exports = Student;