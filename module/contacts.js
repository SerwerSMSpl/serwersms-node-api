var contacts = {
    oSms: null,
    init:function(){
        this.oSms = require('./../sms.js');
    },
    /**
    * Add new contact
    * 
    * @param array $params
    *      @option int|array $group_id
    *      @option string $phone
    *      @option string "email"
    *      @option string "first_name"
    *      @option string "last_name"
    *      @option string "company"
    *      @option string "tax_id"
    *      @option string "address"
    *      @option string "city"
    *      @option string "description"
    * @return array
    *      @option bool "success"
    *      @option int "id"
    */
    add:function(params,callback) {
        
        return this.oSms.call('contacts/add',params,callback);
    
    },
    /**
    * List of contacts
    * 
    * @param array $params
    *      @option int $group_id
    *      @option string $search
    *      @option int "page" The number of the displayed page
    *      @option int "limit" Limit items are displayed on the single page
    *      @option string "sort" Values: first_name|last_name|phone|company|tax_id|email|address|city|description
    *      @option string "order" Values: asc|desc
    * @return array
    *      @option array "paging"
    *          @option int "page" The number of current page
    *          @option int "count" The number of all pages
    *          @options array "items"
    *          @option int "id"
    *          @option string "phone"
    *          @option string "email"
    *          @option string "company"
    *          @option string "first_name"
    *          @option string "last_name"
    *          @option string "tax_id"
    *          @option string "address"
    *          @option string "city"
    *          @option string "description"
    *          @option bool "blacklist"
    *          @option int "group_id"
    *          @option string "group_name"
    */
    index:function(params,callback) {
        
        return this.oSms.call('contacts/index',params,callback);
    
    },
    /**
    * View single contact
    * 
    * @param array $params
    *      @option int $id
    * @return array
    *      @option integer "id"
    *      @option string "phone"
    *      @option string "email"
    *      @option string "company"
    *      @option string "first_name"
    *      @option string "last_name"
    *      @option string "tax_id"
    *      @option string "address"
    *      @option string "city"
    *      @option string "description"
    *      @option bool "blacklist"
    */
    view:function(params,callback) {
        
        return this.oSms.call('contacts/view',params,callback);
    
    },
    /**
    * Editing a contact
    * 
    * @param array $params
    *      @option int $id
    *      @option int|array $group_id
    *      @option string $phone
    * @param array $params
    *      @option string "email"
    *      @option string "first_name"
    *      @option string "last_name"
    *      @option string "company"
    *      @option string "tax_id"
    *      @option string "address"
    *      @option string "city"
    *      @option string "description"
    * @return array
    *      @option bool "success"
    *      @option int "id"
    */
    edit:function(params,callback) {
        
        return this.oSms.call('contacts/edit',params,callback);
    
    },
    /**
    * Deleting a phone from contacts
    *
    * @param array $params
    *      @option int $id
    * @return array
    *      @option bool "success"
    */
    delete:function(params,callback) {
        
        return this.oSms.call('contacts/delete',params,callback);
    
    },
    /**
    * Import contact list
    * 
    * @param array
    *   @option string $group_name
    *   @option array $contact[]
    *      @option string "phone"
    *      @option string "email"
    *      @option string "first_name"
    *      @option string "last_name"
    *      @option string "company"
    * @return array
    *      @option bool "success"
    *      @option int "id"
    *      @option int "correct" Number of contacts imported correctly
    *      @option int "failed" Number of errors
    */
    import:function(params,callback) {
        
        return this.oSms.call('contacts/import',params,callback);
    
    }
}
module.exports = contacts;