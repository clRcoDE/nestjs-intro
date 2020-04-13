import * as mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }

})

interface Product extends mongoose.Document {

    id: string;
    title: string;
    description: string;
    price: number
}


export { ProductSchema, Product }