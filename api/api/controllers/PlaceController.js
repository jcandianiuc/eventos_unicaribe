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
    const id = req.param("id");
    const place = await Place.findOne({ id });
    res.success(place);
  } catch (err) {
    res.negotiate(err);
  }
};

const create = async (req, res) => {
  try {
    const { name, location, capacitance, status } = req.allParams();
    const place = await Place.create({
      name,
      location,
      capacitance,
      status
    }).fetch();
    res.created(place);
  } catch (err) {
    res.negotiate(err);
  }
};

const update = async (req, res) => {
  try {
    const { id, name, location, status, capacitance } = req.allParams();
    const params = {
      name,
      location,
      status,
      capacitance
    };
    let parLen = 4;

    if (!location) {
      delete params.location;
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
    if (!capacitance) {
      delete params.capacitance;
      parLen = parLen - 1;
    }

    parLen > 0 && (await Place.update({ id }).set({ ...params }));
    const updatedPlace = await Place.findOne({ id });
    res.success(updatedPlace);
  } catch (err) {
    res.negotiate(err);
  }
};

const remove = async (req, res) => {
  try {
    const id = req.param("id");
    await Place.destroy({ id });
    res.success();
  } catch (err) {
    res.negotiate(err);
  }
};
module.exports = {
  index,
  show,
  create,
  update,
  remove
};
