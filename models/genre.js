const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  genre_name: { type: String, required: true, maxLength: 100 },
});

// Virtual for author's full name
GenreSchema.virtual("genre_name").get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let name = "";
  if (this.genre_name) {
    fullname = `${this.genre_name}`;
  }

  return fullname;
});

// Virtual for author's URL
GenreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/author/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre",  GenreSchema);
