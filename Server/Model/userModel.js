const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: { type: String, required: true, minLength: 3 },
    lastname: { type: String, required: true, minLength: 1 },
    email: {
      type: String,
      required: true,
      minLength: 3,
      unique: true,
      match: /^[^s@]+@[^s@]+.[^s@]+$/,
    },
    password: { type: String, required: true, minLength: 8 },
    phone: { type: String, required: true, minLength: 6 },
    country: { type: String, required: true, minLength: 2 },
    courses: { type: [String], required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = { UserModel };
