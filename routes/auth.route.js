const hotelController = require('../controllers/hotel.controller');

module.exports = function (app){
    app.post('/api/restaurant/add', hotelController.addHotel);
    app.get('/api/restaurant/', hotelController.allHotels);
    app.get('/api/restaurant/categories', hotelController.getAllCategories);


}
