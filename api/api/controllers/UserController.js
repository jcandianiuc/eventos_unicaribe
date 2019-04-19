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

module.exports = {
  create,
};
