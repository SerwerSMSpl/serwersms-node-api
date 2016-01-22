var groups = {
    oSms: null,
    init:function(){
        this.oSms = require('./../sms.js');
    },
    /**
    * Add new group
    * 
    * @param array
    *      @option string $name
    * @return array
    *      @option bool "success"
    *      @option int "id"
    */
    add:function(params,callback) {
      
        return this.oSms.call('groups/add', params,callback);
   
    },
    /**
    * List of group
    * 
    * @param string $search Group name
    * @param array $params
    *      @option string $search Group name
    *      @option int "page" The number of the displayed page
    *      @option int "limit" Limit items are displayed on the single page
    *      @option string "sort" Values: name
    *      @option string "order" Values: asc|desc
    * @return array
    *      @option array "paging"
    *          @option int "page" The number of current page
    *          @option int "count" The number of all pages
    *      @option array "items"
    *          @option int "id"
    *          @option string "name"
    *          @option int "count" Number of contacts in the group
    */
    index:function(params,callback) {
      
        return this.oSms.call('groups/index', params,callback);
   
    },
    /**
    * View single group
    * 
    * @param array
    *      @option int "id"
    * @return array
    *      @option int "id"
    *      @option string "name"
    *      @option int "count" Number of contacts in the group
    */
    view:function(params,callback) {
      
        return this.oSms.call('groups/view', params,callback);
   
    },
    /**
    * Editing a group
    * 
    * @param array
    *      @option string $name
    *      @option int "id"
    * @return array
    *      @option bool "success"
    *      @option int "id"
    */
    edit:function(params,callback) {
      
        return this.oSms.call('groups/edit', params,callback);
   
    },
    /**
    * Deleting a group
    *
    * @param int $id
    * @return array
    *      @option bool "success"
    */
    delete:function(id,callback) {
        var params = { id:id };
        return this.oSms.call('groups/delete', params,callback);
   
    },
    /**
    * Viewing a groups containing phone
    * 
    * @param string $phone
    * @return array
    *      @option int "id"
    *      @option int "group_id"
    *      @option string "group_name"
    */
    check:function(phone,callback) {
      
        var params = { phone:phone };
        return this.oSms.call('groups/check', params,callback);
   
    }
}
module.exports = groups;