const Categorie = require('../models/Categorie.model');

const getAllCategorie = async (req, res) => {
  try {
    const getAllCategorie = await Categorie.find({});
    return res.status(200).json(getAllCategorie);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const createCategorie = async (req, res) => {
  const newCategorie = new Categorie(req.body);
  try {
    const categorie = await newCategorie.save();
    return res.status(200).json(categorie);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const searchCategorie = async (req, res) => {
  let data = await Categorie.find({
    $or: [{ displayName: { $regex: req.params.key, $options: 'i' } }],
  });

  res.send(data);
};

module.exports = { getAllCategorie, createCategorie, searchCategorie };
