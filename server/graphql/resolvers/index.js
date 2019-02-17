const UserContoller = require('./User');
const PlaceContoller = require('./Place');
const CitiesContoller = require('./Cities');

module.exports = {
  users: UserContoller.get,
  createUser: UserContoller.create,
  updateUser: UserContoller.create,
  signinUser: UserContoller.signin,
  deleteUser: UserContoller.delete,
  places: PlaceContoller.get,
  createPlace: PlaceContoller.create,
  updatePlace: PlaceContoller.create,
  deletePlace: PlaceContoller.delete,
  cities: CitiesContoller.get
};
