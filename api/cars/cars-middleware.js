const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  const {id} = req.params.id;
  if(id){
    next()
  }else{
    res.send(404).json({message: 'Car doesnt exist'})
  } 
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}