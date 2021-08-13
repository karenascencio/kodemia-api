const express = require('express')
const router = express.Router()
const koders = require('../usecases/koders')

// middleware
// router.use(express.json());

router.get('/', async (request, response) => {
    try {
        const allKoders = await koders.getAll()
        response.json({
            success: true, 
            message: 'All Koders',
            data: {
                allKoders
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error to get all koders',
            error: error.message
        })
    }
})

router.get('/:id', async (request, response) => {
    const { id } = request.params

    try{
        const getKoder = await koders.getByID(id)
        response.json({
                success: true, 
                message: "Here is the koder",
                data: {
                    mentor: getKoder
                }
            })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error to get koder',
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try{
        const newKoder = request.body
        const createKoder = await koders.create(newKoder)
        response.json({
            success: true,
            message: 'Successfully created!',
            data: {
                createKoder
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error to post koder',
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    const { id } = request.params
    console.log(id)
    try{
        const deleteKoder = await koders.erase(id)
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
            message: 'Error to delete koder',
            error: error.message
        })
    }
    
})

router.patch('/:id', async (request, response) => {
    try{
        const { id } = request.params
        const { body } = request
        
        const koderUpdated = await koders.updateById(id, body)

        response.json({
            success: true,
            message: 'Koder updated!',
            data: {
                koder: koderUpdated
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error to update koder',
            error: error.message
        })
    }
})

module.exports = router