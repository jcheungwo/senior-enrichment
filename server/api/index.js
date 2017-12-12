'use strict'
const apiRouter = require('express').Router()
const db = require('../db')
const bodyParser = require('body-parser');
const Student = require('../db/models/student');
const Campus = require('../db/models/campus')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))

// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create
apiRouter.get('/campus', (req, res, next) => {
	Campus.findAll({include: {all:true}})
	.then(result => res.send(Array.from(result)))
	.catch(err => console.error(err));
});

apiRouter.get('/campus/:id', (req, res, next) => {
	Campus.findById(req.params.id, {include: {all:true}})
	.then(result => res.send(result))
	.catch(err => console.error(err));
})

apiRouter.get('/student', (req, res, next) => {
	Student.findAll({include: {all:true}})
	.then(result => res.send(Array.from(result)))
	.catch(err => console.error(err));
});

apiRouter.get('/student/:id', (req, res, next) => {
	Student.findById(req.params.id, {include: {all:true}})
	.then(result => res.send(result))
	.catch(err => console.error(err));
})

apiRouter.post('/campus', (req, res, next) => {
	Campus.create({
		name:req.body.name,
		imageUrl: req.body.imageUrl,
		description: req.body.description
	})	
	.then(function(result) {
		res.send({message: 'Created successfully', Campus: result});
	})
	.catch(err => console.error(err));
})

apiRouter.post('/student', (req, res, next) => {
	Student.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		gpa: req.body.gpa,
		campusId: req.body.campusId
	})
	.then(function(result) {
		res.send({message: 'Created successfully', Student: result});
	})
	.catch(err => console.error(err));
})

apiRouter.put('/campus/:id', (req, res, next) => {
	Campus.findById(req.params.id)
	.then ( function (result) {return result.update(req.body)})
	.then ( function (result) {res.send({message: 'Updated Successfully', campus:result})})
	.catch ( err => console.error(err));
})

apiRouter.put('/student/:id', (req, res, next) => {
	Student.findById(req.params.id)
	.then ( function (result) {return result.update(req.body)})
	.then ( function (result) {res.send({message: 'Updated Successfully', student:result})})
	.catch (err => console.error(err));
})

apiRouter.delete('/campus/:id', (req, res, next) => {
	Campus.findById(req.params.id)
	.then (campus => {return campus.destroy()})
	.then (campus => res.send(campus))
	.catch (err => console.error(err));
})

apiRouter.delete('/student/:id', (req, res, next) => {
	Student.findById(req.params.id)
	.then(student => {return student.destroy()})
	.then(student => res.send(student))
	.catch ( err => console.error(err));
})

module.exports = apiRouter;