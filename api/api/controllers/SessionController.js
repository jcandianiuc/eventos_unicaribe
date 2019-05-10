/**
 * SessionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const moment = require("moment");

const login = async (req, res) => {
  try {
    console.log("HEEEEEREEEE");

    const { email, password } = req.allParams();
    const user = await User.findOne({ email });
    console.log("USER FOUND: ", user);

    if (!user) {
      const err = {
        err: {
          message: "User not found"
        },
        status: 404
      };
      throw err;
    }
    console.log("PASSWORDS: ", { password, passwordUser: user.password });

    const match = sails.helpers.compareHash.with({
      raw: password,
      encrypted: user.password
    });
    console.log("DAFAQ: ", match);

    if (!match) {
      console.log("HERE?");
      const matchErr = {
        err: {
          message: "Values do not match"
        },
        status: 501
      };
      throw matchErr;
    }
    console.log("HERE!");

    const token = sails.helpers.generateToken.with({
      id: user.id,
      email: user.email,
      login: moment().format(),
      key: sails.config.session.secret
    });
    console.log("TOKEN FOUND", token);

    delete user.password;
    res.success({ token, user });
  } catch (er) {
    const { err: e, status } = er;
    res.handle({ err: e, status });
  }
};

module.exports = { login };
