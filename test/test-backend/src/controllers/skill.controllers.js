const Skill = require('../models/Skill.model');

const getAllSkill = async (req, res) => {
  try {
    const getAllSkill = await Skill.find({});
    return res.status(200).json(getAllSkill);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const createSkill = async (req, res) => {
  const newSkill = new Skill(req.body);
  try {
    const skill = await newSkill.save();
    return res.status(200).json(skill);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const searchSkill = async (req, res) => {
  let data = await Skill.find({
    $or: [{ displayName: { $regex: req.params.key, options: 'i' } }],
  });

  res.send(data);
};

module.exports = { getAllSkill, createSkill, searchSkill };
