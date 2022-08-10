const mongoose = require('mongoose');

const ListsSchema = mongoose.Schema({

    title: {
        type: String,
        required:true,
        trim: true

    },
    tasks: {
        type: Array,
        required:false,

    },
    creado: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Lists', ListsSchema);