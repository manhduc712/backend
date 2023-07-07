import mongoose from "mongoose";

const producerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        default: ""
    }

})

export default mongoose.model('Producers', producerSchema)