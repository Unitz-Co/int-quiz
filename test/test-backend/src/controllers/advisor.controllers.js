const Advisor = require('../models/advisor.model');

const getAllAdvisors = async (req, res) => {
  try {
    const getAllAdvisors = await Advisor.find({})
      .populate({
        path: 'categoriesCollection',
        populate: {
          path: 'categorieId',
          model: 'Categorie',
          select: 'displayName',
        },
      })
      .populate({
        path: 'skillsCollection',
        populate: {
          path: 'skillId',
          model: 'Skill',
        },
      })
      .populate({
        path: 'servicesCollection',
        populate: {
          path: 'serviceId',
          model: 'Service',
        },
      });
    return res.status(200).json(getAllAdvisors);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const createAdvisor = async (req, res) => {
  const newAdvisor = new Advisor(req.body);
  try {
    const advisor = await newAdvisor.save();
    return res.status(200).json(advisor);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const searchAdvisor = async (req, res) => {
  console.log('ping');
  let data = await Advisor.find({
    $or: [
      { displayName: { $regex: req.params.key, $options: 'i' } },
      { email: { $regex: req.params.key, $options: 'i' } },
      { status: { $regex: req.params.key } },
      { 'categoriesCollection.cateName': { $regex: req.params.key, $options: 'i' } },
      { 'skillsCollection.skillName': { $regex: req.params.key, $options: 'i' } },
      { 'servicesCollection.serviceName': { $regex: req.params.key, $options: 'i' } },
    ],
  });

  res.send(data);
};

const searchFilterhAdvisor = async (req, res) => {
  const data = await Advisor.find({});
  const filters = req.query;
  const filteredAdvisor = data.filter((item) => {
    let isValid = true;
    for (key in filters) {
      isValid = isValid && user[item] == filters[key];
    }
    return isValid;
  });
  res.send(filteredAdvisor);
};

module.exports = { getAllAdvisors, createAdvisor, searchAdvisor, searchFilterhAdvisor };
