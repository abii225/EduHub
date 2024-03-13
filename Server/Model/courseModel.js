const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    title: { type: String, required: true, minLength: 3 },
    description: { type: String, required: true },
    users: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CourseModel = mongoose.model("Course", courseSchema);
module.exports = { CourseModel };
