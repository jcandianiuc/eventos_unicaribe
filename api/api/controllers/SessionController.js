/**
 * SessionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const moment = require('moment');

const login = async (req, res) => {
  try {
    const { email, password } = req.allParams();
    const user = await User.findOne({ email });
    if (!user) {
      const err = {
        err: {
          message: 'User not found',
        },
        status: 404,
      };
      throw err;
    }
    const match = sails.helpers.compareHash.with({
      raw: password,
      encrypted: user.password,
    });
  } catch (err) {}
};

module.exports = { login };
