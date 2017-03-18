/**
 * Created by Administrator on 2017/3/16.
 */
var mysql  = require('mysql');
// 电脑密码
// var pool  = mysql.createPool({
//     connectionLimit : 10,
//     host            : 'localhost',
//     user            : 'root',
//     password        : '1234',
//     database        : 'jeesite'
// });
// 魔泊云
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : '192.168.1.181',
    user            : '06288107f4964',
    password        : '7fae65869d754',
    database        : 'd68a195b51f84'
});

exports.find = function (msql,callback) {
    pool.query(msql, function (error, results, fields) {
        if (error) throw error;
        else{
            callback(error,results);
        }
    });
};
