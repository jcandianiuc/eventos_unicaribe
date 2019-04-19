/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const create = async (req, res) => {
  try {
    const { name, lastName, email, password, type } = req.allParams();
  } catch (error) {}
};

module.exports = {
  create,
};
