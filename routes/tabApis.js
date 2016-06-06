var tabCat = require('../models/models').tabCategory;

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
    }
}