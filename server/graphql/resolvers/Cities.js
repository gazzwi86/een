const CitiesSchema = require('../../models/Cities');
const helpers = require('../../helpers');

exports.get = async (args, req) => {
  try {
    helpers.isAuth(req);

    const cities = await CitiesSchema.find();

    return cities.map(async result => ({
      ...result._doc
    }));
  } catch (err) {
    return helpers.error(err);
  }
};
