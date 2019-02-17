const mongoose = require('mongoose');
const PlaceSchema = require('../../models/Place');
const UserController = require('./User');
const helpers = require('../../helpers');

exports.create = async ({ placeInput }, req) => {
  try {
    helpers.isAuth(req);

    let place;

    if (!placeInput._id) {
      place = new PlaceSchema();
      place['_id'] = new mongoose.Types.ObjectId();
    } else {
      place = await PlaceSchema.findById(placeInput._id);

      if (!place) {
        throw new Error("Place doesn't exists");
      }
    }

    place.name = placeInput.name;
    place.destinations = placeInput.destinations;
    place.creator = placeInput.creator;

    const result = await place.save();

    return {
      ...result._doc,
      creator: await UserController.getById(result._doc.creator)
    };
  } catch (err) {
    return helpers.error(err);
  }
};

exports.get = async (args, req) => {
  try {
    helpers.isAuth(req);

    const places = await PlaceSchema.find();

    return places.map(async result => ({
      ...result._doc,
      creator: await UserController.getById(result.creator)
    }));
  } catch (err) {
    return helpers.error(err);
  }
};

exports.getById = async placeId => {
  try {
    const result = await PlaceSchema.findById(placeId);

    return {
      ...result._doc,
      creator: await UserController.getById(result._doc.creator)
    };
  } catch (err) {
    return helpers.error(err);
  }
};

exports.getByUserId = async userId => {
  try {
    const places = await PlaceSchema.find({ creator: { $in: userId } });

    return places.map(result => ({
      ...result._doc
    }));
  } catch (err) {
    return helpers.error(err);
  }
};

exports.delete = async ({ placeId }, req) => {
  try {
    helpers.isAuth(req);

    const place = await this.getById(placeId);

    if (place) {
      await PlaceSchema.deleteOne({ _id: placeId });

      return placeId;
    } else {
      throw Error("place does'nt exist");
    }
  } catch (err) {
    return helpers.error(err);
  }
};

exports.deleteMany = async ids => {
  try {
    await PlaceSchema.deleteMany({ _id: { $in: ids } });

    return ids;
  } catch (err) {
    return helpers.error(err);
  }
};
