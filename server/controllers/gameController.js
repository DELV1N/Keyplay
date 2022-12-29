const { Game } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");
const { parse } = require("path");

class GameController {
  async create(req, res, next) {
    try {
      const {
        name,
        description,
        date,
        genre,
        launcher,
        price,
        publisherId,
        developerId,
      } = req.body;
      const { cover } = req.files;
      let fileName = uuid.v4() + ".jpg";
      cover.mv(path.resolve(__dirname, "..", "static", fileName));

      const game = await Game.create({
        name,
        description,
        date,
        genre,
        launcher,
        price,
        cover: fileName,
        publisherId,
        developerId,
      });

      return res.json(game);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { publisherId, developerId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    let games;
    if (!publisherId && !developerId) {
      games = await Game.findAndCountAll({
        limit: parseInt(limit),
        offset: parseInt(offset),
      });
    }
    if (publisherId && !developerId) {
      games = await Game.findAndCountAll({
        where: { publisherId },
        limit: parseInt(limit),
        offset: parseInt(offset),
      });
    }
    if (!publisherId && developerId) {
      games = await Game.findAndCountAll({
        where: { developerId },
        limit: parseInt(limit),
        offset: parseInt(offset),
      });
    }
    if (publisherId && developerId) {
      games = await Game.findAndCountAll({
        where: { publisherId, developerId },
        limit: parseInt(limit),
        offset: parseInt(offset),
      });
    }
    return res.json(games);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const game = await Game.findOne({
      where: { id },
    });
    return res.json(game);
  }
}

module.exports = new GameController();
