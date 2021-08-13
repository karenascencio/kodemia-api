const express = require('express')
const router = express.Router()
const mentors = require('../usecases/mentors')

router.get('/', async (request, response) => {
try {
    const allMentors = await mentors.getAll()
    response.json({
        success: true, 
        message: 'All Mentors',
        data: {
            allMentors
        }
    })
} catch (error){
    response.status(400)
    response.json({
        success: false,
        message: 'Error to get all mentors',
        error: error.message
    })
}
})

router.get('/:id', async (request, response) => {
    const { id } = request.params

    try{
        const getMentor = await mentors.getByID(id)
        response.json({
                success: true, 
                message: "Here is the mentor",
                data: {
                    mentor: getMentor
                }
            })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error to get mentor',
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
try{
    const newMentor = request.body
    const createMentor = await mentors.create(newMentor)
    response.json({
        success: true,
        message: 'Successfully created!',
        data: {
            createMentor
        }
    })
} catch (error) {
    response.status(400)
    response.json({
        success: false,
        message: 'Error to post mentor',
        error: error.message
    })
}
})

router.delete('/:id', async (request, response) => {
const { id } = request.params
console.log(id)
try{
    const deleteMentor = await mentors.erase(id)
    response.json({
            success: true, 
            message: "Successfully deleted!",
            data: {
                id
            }
        })
} catch (error){
    response.status(400)
    response.json({
        success: false,
        message: 'Error to delete mentor',
        error: error.message
    })
}

})

router.patch('/:id', async (request, response) => {
try{
    const { id } = request.params
    const { body } = request
    
    const mentorUpdated = await mentors.updateById(id, body)

    response.json({
        success: true,
        message: 'Mentor updated!',
        data: {
            koder: mentorUpdated
        }
    })
} catch (error){
    response.status(400)
    response.json({
        success: false,
        message: 'Error to update mentor',
        error: error.message
    })
}
})

module.exports = router
