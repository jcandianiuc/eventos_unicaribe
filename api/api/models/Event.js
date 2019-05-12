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
      type: "string",
      columnType: "datetime"
    },
    startTime: {
      type: "string",
      columnType: "datetime"
    },
    endTime: {
      type: "string",
      columnType: "datetime"
    },
    cost: {
      type: "float"
    },
    status: {
      type: "string",
      enum: ["finished", "in progress", "incoming"],
      defaultsTo: "incoming"
    },
    main: {
      type: "boolean"
    },
    Type: {
      model: "Type"
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
