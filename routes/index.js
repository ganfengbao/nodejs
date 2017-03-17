var express = require('express');
var db = require("../model/db.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var sql = 'select * from sys_user';
    db.find(sql,function (err,result) {
        sql = "select * from cms_category a where a.parent_id = 1";
        db.find(sql,function (err,result1) {
            console.log(result1);
            res.render('index', { result:  result1});
        });
    });
});

module.exports = router;
