const Koder = require('../models/koders')

function getAll(){
    return Koder.find()
}

function create(newKoder){
    return Koder.create(newKoder)
}
function erase(id){
    return Koder.deleteOne({_id: id})
}


module.exports = {
    getAll,
    create,
    erase
}