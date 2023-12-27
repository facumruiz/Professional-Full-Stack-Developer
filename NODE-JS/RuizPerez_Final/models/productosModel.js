const mongoose = require("../config/mongodb")

const productsSchema = mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    code:Number,
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"categories"
    },

})

productsSchema.virtual("price_currency").get(function(){
    return `$ ${this.price}`
})

productsSchema.set("toJSON",{getters:true,setters:true,virtuals:true})

module.exports = mongoose.model("productos",productsSchema)