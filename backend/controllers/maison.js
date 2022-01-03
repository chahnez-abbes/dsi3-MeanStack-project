const maison = require('./../models/maison');

//const verify=require ('./../middlewares/auth');
// get all maison
exports.all = (req, res) => {
  maison.find()
    .then(maisons => res.status(200).json(maisons))
    .catch(err => res.status(400).json({error: err.message}));
};



// get a maison by id 
exports.get = (req, res, next) => {

  console.log("waa2");
  maison.findOne({ _id: req.params.id })
      .then(maisons => res.status(200).json(maisons))
      .catch(error => res.status(401).json({ error }));

 
 
  };





/*
// get a maison by id securiterrrrrrrrrrrr avec post maine il fous faire registerForm
exports.get = (req, res, next) => {
  console.log(req.params.id);
  console.log("waa"+verify(req, res, next));
 if( verify(req, res, next)){
  console.log("waa2");
  maison.findOne({ _id: req.params.id })
      .then(maisons => res.status(200).json(maisons))
      .catch(error => res.status(401).json({ error }));
 }else{
  throw 'Invalid user ID';
 }
  };
*/
  // store a new maison
exports.create = (req, res, next) => {
  const maison = new maison({
    ...req.body
  });
  course.save()
    .then(() => res.status(201).json({ message: 'maison created  !'}))
    .catch(error => res.status(400).json({ error }));
};

// update a maison by id
exports.update = (req, res, next) => {
  Course.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'maison updated !'}))
    .catch(error => res.status(400).json({ error }));
};

// delete a maison by id
exports.delete = (req, res, next) => {
  maison.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'maison deleted !'}))
    .catch(error => res.status(400).json({ error }));
};
