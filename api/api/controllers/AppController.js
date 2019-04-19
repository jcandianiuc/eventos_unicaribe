/**
 * AppController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const name = 'Eventos Unicaribe API';
const version = '0.0.1';

const index = (req, res) => {
  res.ok({ name, version });
};

module.exports = { index };
