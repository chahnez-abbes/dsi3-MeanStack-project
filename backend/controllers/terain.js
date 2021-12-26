const Course = require('./../models/terain');

// get all terain
exports.all = (req, res) => {
  Course.find()
    .then(courses => res.status(200).json(terain))
    .catch(err => res.status(400).json({error: err.message}));
};

// get a terain by id
exports.get = (req, res, next) => {
  Course.findOne({ _id: req.params.id })
      .then(course => res.status(200).json(terain))
      .catch(error => res.status(404).json({ error }));
  };

  // store a new terain
exports.create = (req, res, next) => {
  const terain = new terain({
    ...req.body
  });
  course.save()
    .then(() => res.status(201).json({ message: 'terain created  !'}))
    .catch(error => res.status(400).json({ error }));
};

// update a terain by id
exports.update = (req, res, next) => {
  Course.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'terain updated !'}))
    .catch(error => res.status(400).json({ error }));
};

// delete a terain by id
exports.delete = (req, res, next) => {
  terain.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'terain deleted !'}))
    .catch(error => res.status(400).json({ error }));
};
