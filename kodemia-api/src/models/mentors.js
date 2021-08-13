const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    modules: [{
        type: String,
        required: true,
        enum: ['React', 'Backend', 'Maquetado', 'JS', 'Cloud'],
        trim: true
    }],
    gender: {
        type: String,
        enum: ['m', 'f'],
        require: true
    },
})

const model = mongoose.model('mentors', mentorSchema)

module.exports = model