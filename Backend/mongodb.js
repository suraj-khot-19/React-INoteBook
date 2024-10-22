const mongoose = require('mongoose');
const connectMonogo = () => {
    mongoose.connect('mongodb://localhost:27017/')
        .then(() => console.log('connected to mongoose sucessfully'))
        .catch((err) => console.log(err))
}

module.exports = connectMonogo;