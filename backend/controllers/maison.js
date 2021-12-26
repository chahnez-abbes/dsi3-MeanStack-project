const Course = require('./../models/maison');

// get all maison
exports.all = (req, res) => {
  Course.find()
    .then(courses => res.status(200).json(maison))
    .catch(err => res.status(400).json({error: err.message}));
};

// get a maison by id
exports.get = (req, res, next) => {
  Course.findOne({ _id: req.params.id })
      .then(course => res.status(200).json(maison))
      .catch(error => res.status(404).json({ error }));
  };

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
