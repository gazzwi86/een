const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitiesSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    city: { type: String, required: true },
    province: { type: String, required: true },
    country: { type: String, required: true },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cities', CitiesSchema);
