const express =  require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review");
const Listing = require("../models/listing");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/review.js");

// ======================post route(add review)==============
router.post(`/`,isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

// ====================== Delete route====================================
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;