var error = {
    oSms: null,
    init:function(){
        this.oSms = require('./../sms.js');
    },
    /**
    * Preview error
    * 
    * @param int $code
    * @return array
    *      @option int "code"
    *      @option string "type"
    *      @option string "message"
    */
    view:function(code,callback) {
        
        return this.oSms.call('error/'+code,callback);
    
    }
}
module.exports =  error;