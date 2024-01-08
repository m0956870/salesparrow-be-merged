const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const detailed_goods_return_item_schema = new Schema({
    detailed_id:{
        type:String,
    },
    product_id:{
        type:String,
    },
    product_price:{
        type:String,
    },
    quantity:{
        type:String,
    },
    sub_total_price:{
        type:String,
    },
    Created_date: {
        type: String,
        default: ""
    },
    Updated_date: {
        type: String,
        default: ""
    },
    is_delete: {
        type: String,
        default: "0"
    },
    status: {
        type: String,
        default:'InActive'
    }
});

module.exports = mongoose.model('DetailedGoodsReturnItem',detailed_goods_return_item_schema)