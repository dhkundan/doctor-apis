var tabCat = require('../models/models').tabCategory;
var tablet = require('../models/models').tablet;

module.exports = {
    
    addTabCategory : function(req, res){
        
        console.log('Adding Tab Category');
        console.log('req.body');
        console.log(req.body);
        var newTabCat = {};
        newTabCat.name = req.body.name;
        newTabCat.desc = req.body.desc;
        tabCat.update({name: newTabCat.name },newTabCat,{upsert: true},function(err, updated){
        if(err) {
                res.status(406).send({'status' : 1, message : 'Some error occurred.', err: err});
        }
        else{
                res.status(200).send({'status' : 0, message : 'New tablet category updated.', data: updated});
        }   
        });
    },
    getTabCategories : function(req, res){  
        console.log('here')
    tabCat.find({})
        .skip(req.query.itemsPerPage * (req.query.pageNo - 1))
        .limit(parseInt(req.query.itemsPerPage))
        .exec(function (err, tabCats){ 
        if(err) {
                res.status(406).send({'status' : 1, message : 'Some error occurred.', err: err});
        }
        else{
                res.status(200).send({'status' : 0, message : 'Tablet categories found.', data: tabCats});
        }  
    
    });
    },/*test api comment*/
    addTablet : function(req, res){
    var newTab = {};
    newTab.name = req.body.name;
    newTab.desc = req.body.desc;
    newTab.catId = req.body.catId;
    tablet.update({name: newTab.name, catId : newTab.catId },newTab,{upsert: true},function(err, updated){
        if(err) {
                res.status(406).send({'status' : 1, message : 'Some error occurred.', err: err});
        }
        else{
                res.status(200).send({'status' : 0, message : 'New tablet updated.', data: updated});
        }   
        });
    },
    getTablets : function(req, res){  
    tablet.find({catId: req.query.catId})
        .skip(req.query.itemsPerPage * (req.query.pageNo - 1))
        .limit(parseInt(req.query.itemsPerPage))
        .exec(function (err, tabCats){ 
        if(err) {
            res.status(406).send({'status' : 1, message : 'Some error occurred.', err: err});
        }
        else{
            res.status(200).send({'status' : 0, message : 'Tablets found.', data: tabCats});
        }  
    
    });
    },
}