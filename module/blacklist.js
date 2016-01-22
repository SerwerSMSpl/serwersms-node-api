var blacklist = {
    oSms: null,
    init:function(){
        this.oSms = require('./../sms.js');
    },
    /**
    * List of blacklist phones
    * @param array $params
    *      @option string $phone
    *      @option int "page" The number of the displayed page
    *      @option int "limit" Limit items are displayed on the single page
    * @return array
    *      @option array "paging"
    *          @option int "page" The number of current page
    *          @option int "count" The number of all pages
    *      @option array "items"
    *          @option string "phone"
    *          @option string "added" Date of adding phone
    */
    index:function(params,callback) {
        
        return this.oSms.call('blacklist/index',params,callback);
    
    },
    /**
    * Checking if phone is blacklisted
    * @param array $params
    *      @option string $phone
    * @return array
    *      @option bool "exists"
    */
    check:function(params,callback) {
        
        return this.oSms.call('blacklist/check',params,callback);
    
    },
    /**
    * Deleting phone from the blacklist
    * @param array $params
    *      @option string $phone
    * @return array
    *      @option bool "success"
    */
    delete:function(params,callback) {
        
        return this.oSms.call('blacklist/delete',params,callback);
    
    },
}
module.exports = blacklist;