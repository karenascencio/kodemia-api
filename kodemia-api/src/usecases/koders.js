const Koder = require('../models/koders')

function getAll(){
    return Koder.find()
}

function getByID(id){
    return Koder.find({_id: id})
}

function create(newKoder){
    return Koder.create(newKoder)
}
function erase(id){
    return Koder.findByIdAndDelete(id)
}
function updateById(id, newData){
    return Koder.findByIdAndUpdate(id, newData, {new: true})
}

module.exports = {
    getAll,
    create,
    erase,
    updateById,
    getByID
}