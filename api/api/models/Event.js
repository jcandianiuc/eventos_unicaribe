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
    type: {
      type: 'string',
      enum: ['conference', 'play'],
    },
    Place: {
      model: 'Place',
    },
    Attendants: {
      collection: 'Assistant',
      via: 'Events',
    },
    Talker: {
      model: 'Talker',
    },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  },
};
