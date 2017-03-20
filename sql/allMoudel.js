/**
 * Created by gfbaiwff on 2017/3/18.
 */
module.exports = {
    "category":'a.id AS "id",a.parent_id AS "parent.id",a.parent_ids AS "parentIds",a.site_id AS "site.id",a.office_id AS "office.id",'+
        'a.module AS "module",a.name AS "name",a.image AS "image",a.href AS "href",a.target AS "target",a.description AS "description",'+
        'a.keywords AS "keywords",a.sort AS "sort",a.in_menu AS "inMenu",a.in_menu AS "inList",a.show_modes AS "showModes",'+
        'a.allow_comment AS "allowComment",a.is_audit AS "isAudit",a.custom_list_view AS "customListView",a.custom_content_view AS "customContentView",'+
       'a.view_config AS "viewConfig",a.create_by AS "createBy.id",a.create_date AS "createDate",a.update_by AS "updateBy.id",'+
        'a.update_date AS "updateDate",a.remarks AS "remarks",a.del_flag AS "delFlag"',
    "Site":'a.id AS "id",a.name AS "name",a.title AS "title",a.logo AS "logo",a.domain AS "domain",a.description AS "description",'+
        'a.keywords AS "keywords",a.theme AS "theme",a.copyright AS "copyright",a.custom_index_view AS "customIndexView",'+
        'a.create_by AS "createBy.id",a.create_date AS "createDate",a.update_by AS "updateBy.id",a.update_date AS "updateDate",' +
        'a.remarks AS "remarks",a.del_flag AS "delFlag"',
    "cmsCategoryDaoColumns":'a.id AS "id",a.parent_id AS "parent.id",a.parent_ids AS "parentIds",a.site_id AS "site.id",' +
        'a.office_id AS "office.id",a.module AS "module",a.name AS "name",a.image AS "image",a.href AS "href",a.target AS "target",' +
        'a.description AS "description",a.keywords AS "keywords",a.sort AS "sort",a.in_menu AS "inMenu",a.in_list AS "inList",' +
        'a.show_modes AS "showModes",a.allow_comment AS "allowComment",a.is_audit AS "isAudit",a.custom_list_view AS "customListView",' +
        'a.custom_content_view AS "customContentView",a.view_config AS "viewConfig",a.create_by AS "createBy.id",a.create_date AS "createDate",' +
        'a.update_by AS "updateBy.id",a.update_date AS "updateDate",a.remarks AS "remarks",a.del_flag AS "delFlag",c.name AS "parent.name",' +
        'c.view_config AS "parent.viewConfig",o.name AS "office.name",s.theme AS "site.theme"',
    "cmsCategoryDaoJoins":'LEFT JOIN cms_category c ON c.id = a.parent_id JOIN sys_office o ON o.id = a.office_id ' +
        'JOIN sys_user u ON u.id = a.create_by JOIN cms_site s ON a.site_id = s.id'
};