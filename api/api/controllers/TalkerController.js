/**
 * TalkerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const index = async (req, res) => {
  try {
    const talkers = await Talker.find();
    res.success(talkers);
  } catch (err) {
    res.negotiate(err);
  }
};

const show = async (req, res) => {
  try {
    const id = req.param("id");
    const talker = await Talker.findOne({ id });
    res.success(talker);
  } catch (err) {
    res.negotiate(err);
  }
};

const create = async (req, res) => {
  try {
    const talker = await Talker.create(req.allParams()).fetch();
    res.created(talker);
  } catch (err) {
    res.badRequest(err);
  }
};

const update = async (req, res) => {
  try {
    const { id, name, description } = req.allParams();
    const params = {
      name,
      description
    };
    let parLen = 2;

    if (!description) {
      delete params.description;
      parLen = parLen - 1;
    }

    if (!name) {
      delete params.name;
      parLen = parLen - 1;
    }

    parLen > 0 && (await Talker.update({ id }).set({ ...params }));
    const updatedTalker = await Talker.findOne({ id });
    res.success(updatedTalker);
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
