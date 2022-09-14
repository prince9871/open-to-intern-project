const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, unique: true,required: true},
        mobile: { type: String, unique: true, required: true },
        collegeId: { type: ObjectId, ref: 'CollegeDB' },
        isDeleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('InternDB', internSchema)