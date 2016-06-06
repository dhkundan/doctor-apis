var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
var tabletCategorySchema = new Schema({
    name: { type: String, required: true},
    desc: {type: String},
    date: { type: Date, default: Date.now, required: true}  
});
 

var tabCategory = mongoose.model('tabCategory', tabletCategorySchema);

module.exports = {
    
    tabCategory:tabCategory
    
}