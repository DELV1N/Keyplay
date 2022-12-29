const { Key } = require("../models/models");

class KeyController {
  async create(req, res) {
    const { keyStr, gameId } = req.body;
    const keys = await Key.create({ keyStr, gameId });
    return res.json(keys);
  }

  async getAll(req, res) {
    let keys = await Key.findAndCountAll();
    return res.json(keys);
  }
}

module.exports = new KeyController();
