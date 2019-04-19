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
  } catch (error) {}
};

module.exports = {
  create,
};
