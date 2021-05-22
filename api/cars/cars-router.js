// DO YOUR MAGIC
const express = require('express');
const Cars = require('../cars/cars-model');
// const checkCarId = require('./cars-middleware');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res, next) => {
  Cars.getAll(req.query)
    .then(cars => {
      res.status(200).json(cars)
    })
    .catch(err=>next(err))
})

router.get('/:id', (req, res)=>{
  Cars.getById(req.params.id)
    .then(car => {
      if(car){
        res.status(200).json(car)
      }else{
        res.status(404).json({message: 'Car was not found'})
      }
    })
    .catch(() => {
      res.status(500).json({message: 'Problem retrieving the car'})
    })
})

router.post('/', (req, res) => {
  Cars.create(req.body)
    .then(car => {
      res.status(201).json(car);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error adding the car',
      });
    });
});

module.exports = router;