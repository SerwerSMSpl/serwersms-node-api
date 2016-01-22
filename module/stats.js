var stats = {
    oSms: null,
    init:function(){
        this.oSms = require('./../sms.js');
    },
    /**
    * Statistics an sending
    * 
    * @param array $params
    *      @option string "type" eco|full|voice|mms
    *      @option string "begin" Start date
    *      @option string "end" End date
    * @return array
    *      @option array "items"
    *          @option int "id"
    *          @option string "name"
    *          @option int "delivered"
    *          @option int "pending"
    *          @option int "undelivered"
    *          @option int "unsent"
    *          @option string "begin"
    *          @option string "end"
    *          @option string "text"
    *          @option string "type" eco|full|voice|mms
    */
    index:function(params,callback) {
       
        return this.oSms.call('stats/index', params,callback);
   
    }
}
module.exports = stats;