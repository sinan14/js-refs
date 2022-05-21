const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;

// https://res.cloudinary.com/douqbebwk/image/upload/w_300/v1600113904/YelpCamp/gxgle1ovzd2f3dgcpass.png

const ImageSchema = new Schema({
  url: String,
  filename: String,
});

ImageSchema.virtual("thumbnail").get(function () {
  return this.url.replace("/upload", "/upload/w_200");
});

const CampgroundSchema = new Schema({
  title: String,
  // images: [{
  //     url: String,
  //     filename: String
  // }]
  //TODO First of all, unfortunately, I can only add virtual properties to a schema.

  // So campground schema. But why I say, unfortunately, is that what we actually want a virtual property on is each image.

  // Because what I want to be able to do in my template is basically something like, you know, image dot.

  // We'll call it thumb maybe or thumbnail.

  // And that should give me this you URL for each particular image.

  // But a campground might have three, four or five different images.

  // So what we can do is just actually move this into its own schema.

  // We can make an image schema, but not an image model.

  // We don't have to export it.

  images: [ImageSchema],
  price: Number,
  description: String,
  location: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

CampgroundSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Review.deleteMany({
      _id: {
        $in: doc.reviews,
      },
    });
  }
});

module.exports = mongoose.model("Campground", CampgroundSchema);
