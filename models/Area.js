import { Schema, model } from 'mongoose';

const areaSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

const Area = model('area', areaSchema);

export default Area;
