const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const StudentSchema = new Schema({
    Name: String,
    Maths: Number,
    Science: Number,
    Chemistry: Number,
    Computer: Number,
    Sanskrit: Number,
});

const DATA = mongoose.model('data', StudentSchema);

module.exports = DATA
