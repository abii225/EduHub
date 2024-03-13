const mongoose = require("mongoose");

const lectureSchema = mongoose.Schema(
  {
    link: { type: String, required: true },
    title: { type: String, required: true, minLength: 3 },
    description: { type: String },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    users: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const LectureModel = mongoose.model("Lecture", lectureSchema);
module.exports = { LectureModel };
