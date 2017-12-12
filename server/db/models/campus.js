const db = require('../index');
const Sequelize = require('sequelize');
const Student = require('./student');

//imageUrl changed to TEXT due to img url's being absurdly long (more than 255 chars)
var Campus = db.define('campus', {
	name: {type: Sequelize.STRING, allowNull: false},
	imageURL: {type:Sequelize.TEXT, defaultValue:'SOME_IMG_URL'},
	description: {type:Sequelize.TEXT, allowNull:false}
})

Campus.beforeDestroy(function (campus) {
	Student.destroy({where: {campusId:campus.id}})
})

module.exports = Campus;