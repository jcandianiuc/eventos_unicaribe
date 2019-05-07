/**
 * Event.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
    },
    description: {
      type: 'text',
    },
    date: {
      type: 'datetime',
    },
    startTime: {
      type: 'datetime',
    },
    endTime: {
      type: 'datetime',
    },
    cost: {
      type: 'float',
    },
    status: {
      type: 'string',
      enum: ['finished', 'in progress', 'coming'],
    },
    Type: {
      model: 'Type',
    },
    Place: {
      model: 'Place',
    },
    Attendants: {
      collection: 'User',
      via: 'Events',
    },
    Talker: {
      model: 'Talker',
    },
  },
};
