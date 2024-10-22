const mongoose = require("mongoose")
const schema = mongoose.Schema;

const Notes = new schema({
    title: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: 'general'
    },
    created_At: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('notes', Notes);