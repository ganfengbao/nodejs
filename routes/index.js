var express = require('express');
var db = require("../model/db.js");
var category = require('../sql/category');
var router = express.Router();
var indexR = new Array();


/* GET home page. */
router.get('/', function(req, res, next) {
    // var sql = 'SELECT a.* FROM cms_category a WHERE a.`parent_ids` = "0,1," and a.del_flag = "0"';
    var sql = category.get + '3aafc29401b6498da97d4f704f7c0960';
    db.find(sql,function (err,result) {
        // for(var i=0;i<result.length;i++){
        //     if(result[i].href != "" && result[i].href != null){
        //         db.get(category.get+result[i].id,function (err,result1) {
        //             if(err) console.log(err);
        //             else {
        //                 indexR.push(result1);
                        console.log(result);
        //             }
        //
        //         });
        //         if(i == result.length - 1){
        //             console.log(indexR);
        //             res.render('index',{
        //                 result:result,
        //                 result1:indexR
        //             })
        //         }
        //     }
        // }
    });
});

module.exports = router;
