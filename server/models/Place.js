const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Place', PlaceSchema);
