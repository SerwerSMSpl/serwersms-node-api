var senders = {
    oSms: null,
    init:function(){
        this.oSms = require('./../sms.js');
    },
    /**
    * Creating new Sender name
    * 
    * @param string $name
    * @return array
    *      @option bool "success"
    */
    add:function(name,callback) {
        var params = {name:name};
        return this.oSms.call('senders/add', params,callback);
   
    },
    /**
    * Senders list
    * 
    * @param array $params
    *      @option bool "predefined"
    *      @option string "sort" Values: name
    *      @option string "order" Values: asc|desc
    * @return array
    *      @option array "items"
    *          @option string "name"
    *          @option string "agreement" delivered|required|not_required
    *          @option string "status" pending_authorization|authorized|rejected|deactivated
    */
    index:function(params,callback) {
       
        return this.oSms.call('senders/index', params,callback);
   
    }
    
}
module.exports = senders;