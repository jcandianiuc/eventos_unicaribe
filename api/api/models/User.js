/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
    },
    lastName: {
      type: 'string',
      columnName: 'last_name',
    },
    email: {
      type: 'string',
      unique: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    type: {
      type: 'string',
      enum: ['student', 'admin', 'civil'],
    },
    Events: {
      collection: 'Event',
      via: 'Attendants',
    },
  },
};
