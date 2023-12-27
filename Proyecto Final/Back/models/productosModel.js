const mongoose = require('../bin/mongodb')
const Schema = mongoose.Schema;
var imgSchema = new Schema({ 
    fieldname: "String",
    originalname: "String",
    encoding: "String",
    mimetype: "String",
    destination: "String",
    filename: "String",
    path: "String",
    size: "String"
 });
const MainSchema = new Schema({
    name:{
        type: String,
        index: true,
        trim: true
    },
    sku:{
        type: String,
        unique: true,
        required: true
    },
    description:String,
    price:{
        type: Number,
        min:0,
        required: [true,'Campo precio es obligatorio'],
        get:function(precio){
            return precio*1.21
        }
    },
    quantity:Number,

})
MainSchema.virtual('price_currency').get(function(){
    return "$ "+this.price
})
MainSchema.set('toJSON',{getters:true,virtuals:true})
MainSchema.plugin(mongoose.mongoosePaginate)
module.exports = mongoose.model('products',MainSchema)



