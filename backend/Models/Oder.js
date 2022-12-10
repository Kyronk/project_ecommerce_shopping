const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OderSchema = new Schema({
    // cart: {
    //     type: Array,
    //     require: true,
    //     unique: true,
    // },
    products: {
        type: Array,
        require: true,
        unique: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    total: {
        type: Number,
        require: true,
    },
    isAccept: {
        type: Boolean,
        
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Oder', OderSchema);
