const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { string } = require("joi");

const listingSchema = new Schema({
    title : {
        type:String,
        required : true,
    },
    description : String,
    image : {
        url : String,
        filename : String,
    },
    price : Number,
    location : String,
    country : String,
    reviews : [
        {
            type:Schema.Types.ObjectId,
            ref : "Review",
        }
    ],
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User",
    },
    geometry: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      },    
    category: {
        type: String,
        enum: ['Trending', 'Castles', 'Rooms','Amazing_Pool', 'Hotels', 'Bed_Breakfasts', 'Farm', 'Mountain_views', 'Arctic','Beachfront','Igloos','Ski_in','Top_cities','Camping','Historical','Houseboats','Towers'],
    }
  
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id : {$in : listing.reviews}})
    }
})
const Listing = mongoose.model("Listing",listingSchema);

module.exports = Listing;