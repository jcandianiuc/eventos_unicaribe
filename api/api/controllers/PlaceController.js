/**
 * PlaceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const index = async (req, res) => {
  try {
    const places = await Place.find();
    res.success(places);
  } catch (err) {
    res.negotiate(err);
  }
};

const show = async (req, res) => {
  try {
    const id = req.param('id');
    const place = await Place.findOne({ id });
    res.success(place);
  } catch (err) {
    res.negotiate(err);
  }
};

const create = async (req, res) => {
  try {
    const { name, description, capacitance } = req.allParams();
    const place = await Place.create({ name, description, capacitance });
    res.created(place);
  } catch (err) {
    res.negotiate(err);
  }
};

const update = async (req, res) => {
  try {
    const { id, name, description, status } = req.allParams();
    const params = {
      name,
      description,
      status,
    };
    let parLen = 3;

    if (!description) {
      delete params.description;
      parLen = parLen - 1;
    }

    if (!status) {
      delete params.status;
      parLen = parLen - 1;
    }
    if (!name) {
      delete params.name;
      parLen = parLen - 1;
    }

    parLen > 0 && (await Place.update({ id }).set({ ...params }));
    const updatedPlace = await Place.findOne({ id });
    res.success(updatedPlace);
  } catch (err) {
    res.negotiate(err);
  }
};

module.exports = {
  index,
  show,
  create,
  update,
};
