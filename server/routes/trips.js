const express = require("express");
const {
  getTrips,
  getTrip,
  //   createBootcamp,
  //   updateBootcamp,
  deleteTrip,
  //   getBootcampsInRadius,
  //   bootcampPhotoUpload
} = require("../controllers/trips");

const Trip = require("../models/Trip");

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(
  advancedResults(Trip, {
    path: "user",
    select: "name description", // it will include only theses field of a user obj
  }),
  getTrips
);
//   .post(protect, authorize('user', 'admin'), addReview);

router
  .route("/:id")
  .get(getTrip)
  //   .put(protect, authorize("publisher", "admin"), updateBootcamp)
  .delete(protect, deleteTrip);
// .delete(protect, authorize("publisher", "admin"), deleteTrip);

module.exports = router;
