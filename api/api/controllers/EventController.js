/**
 * EventController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const index = async (req, res) => {
  try {
    const { date = new Date(), sort, limit = 10 } = req.allParams();
    const events = await Event.find({
      where: { date: { "=": date } },
      sort,
      limit
    });
    res.success(events);
  } catch (err) {
    res.negotiate(err);
  }
};

const show = async (req, res) => {
  try {
    const id = req.param("id");
    const event = await Event.findOne({ id });
    res.success(event);
  } catch (err) {
    res.negotiate(err);
  }
};

const create = async (req, res) => {
  try {
    const {
      name,
      description,
      date,
      startTime,
      endTime,
      cost,
      type,
      place: Place,
      talker: Talker
    } = req.allParams();
    const event = await Event.create({
      name,
      description,
      date,
      startTime,
      endTime,
      cost,
      type,
      Place,
      Talker
    });
    res.created(event);
  } catch (err) {
    res.negotiate(err);
  }
};

const update = async (req, res) => {
  try {
    const {
      id,
      name,
      description,
      date,
      startTime,
      endTime,
      cost,
      type,
      place: Place,
      talker: Talker
    } = req.allParams();
    const params = {
      name,
      description,
      date,
      startTime,
      endTime,
      cost,
      type,
      Place,
      Talker
    };
    let parLen = 9;
    if (!name) {
      delete params.name;
      parLen = parLen - 1;
    }
    if (!description) {
      delete params.description;
      parLen = parLen - 1;
    }
    if (!date) {
      delete params.date;
      parLen = parLen - 1;
    }
    if (!startTime) {
      delete params.startTime;
      parLen = parLen - 1;
    }
    if (!endTime) {
      delete params.endTime;
      parLen = parLen - 1;
    }
    if (!cost) {
      delete params.cost;
      parLen = parLen - 1;
    }
    if (!type) {
      delete params.type;
      parLen = parLen - 1;
    }
    if (!Place) {
      delete params.Place;
      parLen = parLen - 1;
    }
    if (!Talker) {
      delete params.Talker;
      parLen = parLen - 1;
    }
    parLen > 0 && (await Event.update({ id }).set({ ...params }));
    const updatedEvent = await Event.findOne({ id });
    res.success(updatedEvent);
  } catch (err) {
    res.negotiate(err);
  }
};

const eventsByUser = async (req, res) => {
  try {
    const user = req.param("user");
    const events = await Event.find({ Attendants: [user] });
    res.success(events);
  } catch (err) {
    res.negotiate(err);
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  eventsByUser
};
