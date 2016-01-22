var phones = {
    oSms: null,
    init:function(){
        this.oSms = require('./../sms.js');
    },
    /**
    * Checking phone in to HLR
    * 
    * @param string $phone
    * @param string $id Query ID returned if the processing takes longer than 60 seconds
    * @return array
    *      @option string "phone"
    *      @option string "status"
    *      @option int "imsi"
    *      @option string "network"
    *      @option bool "ported"
    *      @option string "network_ported"
    */
    check:function(phone,id,callback) {
        var params = {phone:phone,id:id};
        return this.oSms.call('phones/check', params,callback);
   
    },
    test:function(phone,callback) {
        var params = {phone:phone};
        return this.oSms.call('phones/test', params,callback);
   
    }
}
module.exports = phones;