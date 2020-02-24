const express = require('express');
const router = express.Router();
const Pie = require('../db').import('../models/pie'); // if can access db, then import the model
// const validateSession = require('../middleware/validate-session')

//const router = require('express').Router(); // single line for both the above

// router.get('/', (req, res) => res.send('this is coming from the controller'));
// router.get('/test', (req, res) => res.send('this is coming from the controller'));
router.get('/', (req, res) =>{
    Pie.findAll()
        .then(pie => {
            res.status(200).json(pie)
            console.log(`**********  from piecontroller --- status 200 ${pie}`)
        })
        .catch(err => res.status(500).json({
            error: err
        }))
});
/**********************************************
Put a search string at the end of the URL. Find the first occurence of that string in nameOfPie
********************************************* */
router.get('/:name', (req, res) => { // can put the search string at the end of the URL
    Pie.findOne({ // find first instance of ...
            where: {
                nameOfPie: req.params.name
            }
        })
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({
            error: err
        }))
})

/**********************************************
changing
If specify the id of a pie, update that pie using the contents of body
********************************************* */
router.put('/:id', (req, res) => { 
    Pie.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(pie => res.status(200).json(pie))
        .catch(err => res.json(req.errors))
})

/********************************************** 
Delete
specify the id of the record to delete at the end of the URL
********************************************* */
router.delete('/:id', (req, res) => {
    Pie.destroy({
        where: {
            id: req.params.id
        }
    .then(pie => res.status(200).json(pie))
    .catch(err => res.json({
        error: err
    }))
    })
})


// post some pies to the database
router.post('/', (req, res) => {
    const pieFromRequest = {
        nameOfPie: req.body.nameOfPie,
        baseOfPie: req.body.baseOfPie,
        crust: req.body.crust,
        timeToBake: req.body.timeToBake,
        servings: req.body.servings,
        rating: req.body.rating
    }

    console.log(`********************* This is req from piecontroller ${req}  ***********************`);

    Pie.create(pieFromRequest)
        .then(pie => res.status(200).json(pie))
        .catch(err => res.json({
            error: err
        }))
})

module.exports = router;