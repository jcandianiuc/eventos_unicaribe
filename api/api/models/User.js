/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    passwordHashed: {
      type: 'string',
      required: true,
    },
    isAdmin: {
      type: 'bool',
    },
    toJSON() {
      let obj = this.toObject();
      delete obj.passwordHashed;
      return obj;
    },
  },
  beforeValidate(params, cb) {
    if (params.password)
      params.passwordHashed = await sails.helpers.hashPassword({password: params.password});
    cb();
  },
};
