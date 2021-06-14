import mongoose from "mongoose"

const plantSchema = new mongoose.Schema({

    image: {type: String},
    title: {type: String},
    notes: {type: String}

})
const db = mongoose.model('db', plantSchema)
export default db 