var sub_accounts = {
    oSms: null,
    init:function(){
        this.oSms = require('./../sms.js');
    },
    /**
    * Creating new subaccount
    * 
    * @param array $params
    *      @option string $subaccount_username
    *      @option string $subaccount_password
    *      @option int $subaccount_id Subaccount ID, which is template of powers
    *      @option string "name"
    *      @option string "phone"
    *      @option string "email"
    * @return type
    */
    add:function(params,callback) {
       
        return this.oSms.call('subaccounts/add', params,callback);
   
    },
    /**
    * List of subaccounts
    * 
    * @return array
    *      @option array "items"
    *          @option int "id"
    *          @option string "username"
    */
    index:function(callback) {
        
        var params = {};
        return this.oSms.call('subaccounts/index', params,callback);
   
    },
    /**
    * View details of subaccount
    * 
    * @param int $id
    * @return array
    *      @option int "id"
    *      @option string "username"
    *      @option string "name"
    *      @option string "phone"
    *      @option string "email"
    */
    view:function(id,callback) {
        
        var params = {id:id};
        return this.oSms.call('subaccounts/view', params,callback);
   
    },
    /**
    * Setting the limit on subaccount
    * 
    * @param array
    *      @option int $id
    *      @option string $type Message type: eco|full|voice|mms|hlr
    *      @option int $value
    * @return array
    *      @option bool "success"
    *      @option int "id"
    */
    limit:function(params,callback) {
       
        return this.oSms.call('subaccounts/limit', params,callback);
   
    },
    
    /**
    * Deleting a subaccount
    * 
    * @param int $id
    * @return array
    *      @option bool "success"
    */
    delete:function(id,callback) {
        
        var params = {id:id};
        return this.oSms.call('subaccounts/delete', params,callback);
   
    },
}
module.exports = sub_accounts;