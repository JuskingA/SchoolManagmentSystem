const Material = require('../models/Material');

async function addMaterial(req, res) {
  const { title, contentUrl, courseId } = req.body;

  try {
    const material = await Material.create({ title, contentUrl, courseId });
    res.status(201).json({ material });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getMaterials(req, res) {
  const { courseId } = req.params;

  try {
    const materials = await Material.findAll({ where: { courseId } });
    res.status(200).json(materials);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { addMaterial, getMaterials };
