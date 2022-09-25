import mongoose from 'mongoose';

const citizenSchema = new mongoose.Schema({
	userName: {
		type: String,
        required: true,
	},
	garbageCategory: {
		type: String,
		required: true,
	},
	garbageAmount: {
		type: String,
		required: true,
	},
	locationCoordinates: {
		type: String,
		required: true,
	},
});
module.export = mongoose.model('Citizen', citizenSchema);