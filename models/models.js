var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
var tabletCategorySchema = new Schema({
    name: { type: String, required: true},
    desc: {type: String},
    date: { type: Date, default: Date.now, required: true}  
});
 

var tabCategory = mongoose.model('tabCategory', tabletCategorySchema);

var tabletSchema = new Schema({
    name: { type: String, required: true},
    desc: {type: String},
    catId:{type: ObjectId, required: true},
    date: { type: Date, default: Date.now, required: true}  
});
 

var tablet = mongoose.model('tablet', tabletSchema);

module.exports = {
    
    tabCategory:tabCategory,
    tablet:tablet
}