/**
 * Created by gfbaiwff on 2017/3/18.
 */
var all = require('./allMoudel');
module.exports = {
    "get":'select '+all.category+',o.name AS "office.name" FROM cms_category a JOIN sys_office o ON o.id = a.office_id ' +
        'JOIN sys_user u ON u.id = a.create_by WHERE a.id = '
};