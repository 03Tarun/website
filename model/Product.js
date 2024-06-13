 //import mongoose
 const mongoose = require('mongoose')
 //create schema
 const productSchema = new mongoose.Schema({
 p_id: Number,
 p_name: String,
 p_cost: String,
 p_des: String,
 p_cat: String,
 p_image:String
 })
 module.exports = mongoose.model("Product", productSchema)