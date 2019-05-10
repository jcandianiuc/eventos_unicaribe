/**
 * Event.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: "string"
    },
    description: {
      type: "text"
    },
    date: {
      type: "datetime"
    },
    startTime: {
      type: "datetime"
    },
    endTime: {
      type: "datetime"
    },
    cost: {
      type: "float"
    },
    type: {
      type: "string",
      enum: ["conference", "play"]
    },
    status: {
      type: "string",
      enum: ["finished", "comming", "in progress"]
    },
    Place: {
      model: "Place"
    },
    Attendants: {
      collection: "User",
      via: "Events"
    },
    Talker: {
      model: "Talker"
    }
  }
};
