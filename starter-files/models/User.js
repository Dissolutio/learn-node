const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const md5 = require('md5');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		//This is important because later, when you want to reuse the email address, you want it lowercase
		lowercase: true,
		trim: true,
		// this is our middleware, it accepts a method and an error message
		validate: [validator.isEmail, 'Invalid Email Address'],
		required: 'Please supply an email address',
	},
	name: {
		type: String,
		required: 'Please supply a name',
		trim: true,
	},
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);
