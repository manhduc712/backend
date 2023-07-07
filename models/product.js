import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, // giống khóa phụ sql
        ref: "Categories"
    },
    producer: {
        type: mongoose.Schema.Types.ObjectId, // giống khóa phụ sql
        ref: "Producers"
    }
})

export default mongoose.model('Products', productSchema)