const Service = require('../models/Service.model');

const getAllService = async (req, res) => {
  try {
    const getAllService = await Service.find({});
    return res.status(200).json(getAllService);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const createService = async (req, res) => {
  const newService = new Service(req.body);
  try {
    const service = await newService.save();
    return res.status(200).json(service);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const searchService = async (req, res) => {
  let data = await Service.find({
    $or: [{ name: { $regex: req.params.key, $options: 'i' } }],
  });

  res.send(data);
};

module.exports = { getAllService, createService, searchService };
