/**
 * Created by Administrator on 2017/3/16.
 */
var mysql  = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '1234',
    database        : 'jeesite'
});

exports.find = function (msql,callback) {
    pool.query(msql, function (error, results, fields) {
        if (error) throw error;
        else{
            callback(error,results);
        }
    });
};