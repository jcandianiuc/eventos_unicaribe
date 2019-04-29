/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const create = async (req, res) => {
  try {
    const { name, lastName, email, password, type } = req.allParams();
    const password = sails.helpers.encryptPassword(passString);
    const { id } = await Usuarios.create({
      name,
      lastName,
      type,
      email,
      password,
    });
    const user = await User.findOne({ id });
    const token = sails.helpers.generateToken.with({
      id: user.id,
      email: user.email,
      login: moment().format(),
      key: sails.config.session.secret,
    });
    delete user.password;
    res.created({ user, token });
  } catch (err) {
    res.handle(err);
  }
};

const addEvent = async (req, res) => {
  try {
    const id = req.param('id');
    const event = req.param('event');
    const updatedUser = await User.addToCollection(id, 'Events').members([
      event,
    ]);
    await Event.addToCollection(event, 'Attendants').members([id]);
    res.success(updatedUser);
  } catch (err) {
    res.negotiate(err);
  }
};

module.exports = {
  create,
  addEvent,
};
