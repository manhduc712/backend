import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    describe: {
        type: String,
        default: ""
    }
})

export default mongoose.model('Categories', categorySchema)