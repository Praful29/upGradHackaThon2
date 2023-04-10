const Hotel = require('../models/hotel.model');

/** add hotels api starts here */

exports.addHotel = async (req,res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: 'Content cannot be empty' });
      }

    const hotelObj = {
        name : req.body.name,
        description : req.body.description,
        category : req.body.category,
        imageURL : req.body.imageURL,
        location : req.body.location,
        phone : req.body.phone,
        rating : req.body.rating
    };    
    try {
        const hotel = await Hotel.create(hotelObj);
        res.status(200).send(hotel);
    } catch(err) {
        console.error(' Error creating hotel', err.message);
        res.status(500).send({
            message : "Some error occurred while creating the Restaurant."
        })
       
    }
};

/** add hotels api ends here */
