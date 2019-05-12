/**
 * TypeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const index = async (req, res) => {
  try {
    const types = await Type.find();
    res.success(types);
  } catch (err) {
    res.negotiate(err);
  }
};

const show = async (req, res) => {
  try {
    const id = req.param("id");
    const type = await Type.findOne({ id });
    res.success(type);
  } catch (err) {
    res.negotiate(err);
  }
};

const create = async (req, res) => {
  try {
    const type = await Type.create(req.allParams()).fetch();
    res.created(type);
  } catch (err) {
    res.badRequest(err);
  }
};

const update = async (req, res) => {
  try {
    const name = req.param("name");
    const id = req.param("id");
    await Type.update({ id }).set({ name });
    const typeUpdated = await Type.findOne({ id });
    res.success(typeUpdated);
  } catch (err) {
    res.negotiate(err);
  }
};

module.exports = {
  index,
  show,
  create,
  update
};
