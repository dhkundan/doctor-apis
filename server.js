var express = require('express');
var app = express();
var mongoose = require('mongoose');
var erc = require('express-route-controller');
var bodyParser = require('body-parser');
var cors = require('cors')
var morgan = require('morgan')
//mongoose.connect('mongodb://localhost:27017/my_database');
//mongoose.connect('mongodb://kundan:kundan123@ds021943.mlab.com:21943/doctor_db');
app.use(morgan('dev'));

var options = {
  db: { native_parser: true },
  server: { poolSize: 5 },
  replset: { rs_name: 'myReplicaSetName' },
  user: 'kundan',
  pass: 'kundan123'
}
mongoose.connect('mongodb://ds021943.mlab.com:21943/doctor_db', options);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '115mb', extended: true }));
app.use(cors({credentials: true, origin: true}));


erc(app, {
    controllers: __dirname + '/routes',
    routes: {        
        '/addTabCategory': { action: 'tabApis#addTabCategory', method: 'post'},
        '/getTabCategories': { action: 'tabApis#getTabCategories'},
        '/addTablet': { action: 'tabApis#addTablet', method: 'post'},
        '/getTablets': { action: 'tabApis#getTablets'},
        '/removeTablet': { action: 'tabApis#removeTablet'}
        
    }
});
 







/*
app.get('/', function (req, res) {
   res.send('Hello World');
})
app.get('/saveData', function (req, res) {
    var b = new myModel();
    b.name = "kundan";
    b.age = "28";
    b.bio = "281729"
    b.save(function(err, saved){
        if(err){
            res.status(200).send({err: err})
        }
        else{
            res.status(200).send({data: saved})
        }
        
    });
   //res.send('saving data');
    
})*/

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})