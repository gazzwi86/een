const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const UserSchema = require('../../models/User');
const PlaceController = require('./Place');
const helpers = require('../../helpers');

exports.create = async ({ userInput }) => {
  try {
    let user;

    if (!userInput._id) {
      user = await UserSchema.findOne({ email: userInput.email });

      if (user) {
        throw new Error('User already exists');
      } else {
        user = new UserSchema();
        user['_id'] = new mongoose.Types.ObjectId();
      }
    } else {
      user = await UserSchema.findById(userInput._id);

      if (!user) {
        throw new Error("User doesn't exists");
      }
    }

    if (user) {
      user.email = userInput.email;
      user.password = userInput.password;

      const result = await user.save();

      return {
        ...result._doc,
        password: null
      };
    }
  } catch (err) {
    return helpers.error(err);
  }
};

exports.signin = async ({ authInput }) => {
  try {
    const user = await UserSchema.findOne({ email: authInput.email });

    if (user) {
      const isMatch = await user.comparePassword(authInput.password);

      if (isMatch) {
        return {
          userId: user._id,
          tokenExpires: 1,
          token: jwt.sign(
            {
              userId: user._id,
              email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
          )
        };
      } else {
        throw Error('Username or password incorrect');
      }
    } else {
      throw Error('Username or password incorrect');
    }
  } catch (err) {
    return helpers.error(err);
  }
};

exports.get = async (args, req) => {
  try {
    helpers.isAuth(req);

    const users = await UserSchema.find();

    return users.map(async user => ({
      ...user._doc,
      password: null,
      places: await PlaceController.getByUserId(user._doc._id)
    }));
  } catch (err) {
    return helpers.error(err);
  }
};

exports.getById = async userId => {
  try {
    const user = await UserSchema.findById(userId);

    return await {
      ...user._doc,
      password: null,
      places: await PlaceController.getByUserId(user._doc._id)
    };
  } catch (err) {
    return helpers.error(err);
  }
};

exports.delete = async ({ userId }, req) => {
  try {
    helpers.isAuth(req);

    const user = await UserSchema.findById(userId);

    if (user) {
      if (user.lists.length > 0) {
        await PlaceController.deleteMany(user.lists.map(({ _id }) => _id));
      }

      await UserSchema.deleteOne({ _id: userId });

      return userId;
    } else {
      throw Error("User does'nt exist");
    }
  } catch (err) {
    return helpers.error(err);
  }
};
