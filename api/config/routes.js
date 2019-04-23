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

  'post /users': 'UserController.create',
  'post /login': 'SessionController.login',

  'get /place': 'PlaceController.index',
  'get /place/:id': 'PlaceController.show',
  'post /place': 'PlaceController.create',
  'update /place/:id': 'PlaceController.update',
};
