const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Trip = require("../models/Trip");

// @desc      Get all trips by user id
// @route     GET /api/v1/users/:userId/trips
// @access    Public
exports.getTrips = asyncHandler(async (req, res, next) => {
  if (req.params.userId) {
    const trips = await Trip.find({ user: req.params.userId });

    return res.status(200).json({
      success: true,
      count: trips.length,
      data: courses,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc      Get single trip
// @route     GET /api/v1/trips/:id
// @access    Public
exports.getTrip = asyncHandler(async (req, res, next) => {
  const trip = await Trip.findById(req.params.id);

  if (!trip) {
    return next(
      new ErrorResponse(`No trip with the id of ${req.params.id}`),
      404
    );
  }

  res.status(200).json({
    success: true,
    data: trip,
  });
});

// // @desc      Create user
// // @route     POST /api/v1/auth/users
// // @access    Private/Admin
// exports.createUser = asyncHandler(async (req, res, next) => {
//   const user = await User.create(req.body);

//   res.status(201).json({
//     success: true,
//     data: user,
//   });
// });

// // @desc      Update user
// // @route     PUT /api/v1/auth/users/:id
// // @access    Private/Admin
// exports.updateUser = asyncHandler(async (req, res, next) => {
//   const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   res.status(200).json({
//     success: true,
//     data: user,
//   });
// });

// // @desc      Delete user
// // @route     DELETE /api/v1/auth/users/:id
// // @access    Private/Admin
// exports.deleteUser = asyncHandler(async (req, res, next) => {
//   await User.findByIdAndDelete(req.params.id);

//   res.status(200).json({
//     success: true,
//     data: {},
//   });
// });
