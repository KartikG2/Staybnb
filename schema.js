const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        location : Joi.string().required(),
        country : Joi.string().required(),
        category:Joi.string().valid('Trending', 'Castles', 'Rooms', 'Amazing_Pool', 'Hotels', 'Bed_Breakfasts', 'Farm', 'Mountain_views', 'Arctic', 'Beachfront', 'Igloos', 'Ski_in', 'Top_cities', 'Camping', 'Historical', 'Houseboats', 'Towers').required(),
        price : Joi.number().required().min(0),
        image : Joi.string().allow("",null),
    }).required()   
});

module.exports.reviewSchema = Joi.object({
    review : Joi.object({
        rating : Joi.number().required().min(1).max(5),
        comment : Joi.string().required(),
    }).required(),
})