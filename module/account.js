var account = {
    oSms: null,
    init:function(){
        this.oSms = require('./../sms.js');
    },
    /**
    * Register new account
    * 
    * @param array $params
    *      @option string "phone"
    *      @option string "email"
    *      @option string "first_name"
    *      @option string "last_name"
    *      @option string "company"
    * @return array
    *      @option bool "success"
    */
    add:function(params,callback) {
        
        return this.oSms.call('account/add',params,callback);
    
    },
    /**
    * Return limits SMS
    * 
    * @return array
    *      @option array "items"
    *          @option string "type" Type of message
    *          @option string "chars_limit" The maximum length of message
    *          @option string "value" Limit messages
    * 
    */
    limits:function(callback) {
        var params = {};
        return this.oSms.call('account/limits',params,callback);
    
    },
    /**
    * Return contact details
    * 
    * @return array
    *      @option string "telephone"
    *      @option string "email"
    *      @option string "form"
    *      @option string "faq"
    *      @option array "quardian_account"
    *          @option string "name"
    *          @option string "email"
    *          @option string "telephone"
    *          @option string "photo"
    */
    help:function(params,callback) {
        
        return this.oSms.call('account/help',params,callback);
    
    },
    /**
    * Return messages from the administrator
    * 
    * @return array
    *      @option bool "new" Marking unread message
    *      @option string "message" 
    */
    messages:function(callback) {
        var params = {};
        return this.oSms.call('account/messages',params,callback);
    
    }
    
}
module.exports = account;