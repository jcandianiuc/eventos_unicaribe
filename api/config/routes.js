/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'get /': 'AppController.index',

  'post /user': 'UserController.create',
  'update /user/:id/event/:event': 'UserController.addEvent',

  'post /login': 'SessionController.login',

  'get /place': 'PlaceController.index',
  'get /place/:id': 'PlaceController.show',
  'post /place': 'PlaceController.create',
  'update /place/:id': 'PlaceController.update',

  'get /event': 'EventController.index',
  'get /event/:id': 'PlaceController.show',
  'post /event': 'EventController.create',
  'update /event/:id': 'EventController.update',
};
