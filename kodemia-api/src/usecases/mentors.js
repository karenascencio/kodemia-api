const Mentor = require('../models/mentors')

function getAll(){
    return Mentor.find()
}

function getByID(id){
    return Mentor.find({_id: id})
}

function create(data){
    return Mentor.create(data)
}
function erase(id){
    return Mentor.findByIdAndDelete(id)
}
function updateById(id, newData){
    return Mentor.findByIdAndUpdate(id, newData, {new: true})
}

module.exports = {
    getAll,
    create,
    erase,
    updateById,
    getByID
}