const hotelController = require('../controllers/hotel.controller');

module.exports = function (app){
    app.post('/api/restaurant/add', hotelController.addHotel);
}