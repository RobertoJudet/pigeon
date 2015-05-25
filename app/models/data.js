var mongoose = require('mongoose');

module.exports = mongoose.model('Data', {
    name : {type : String, default: ''}
});