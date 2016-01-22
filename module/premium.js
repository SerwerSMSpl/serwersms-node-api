var premium = {
    oSms: null,
    init:function(){
        this.oSms = require('./../sms.js');
    },
    /**
    * List of received SMS Premium
    * 
    * @return array
    *      @option array "items"
    *          @option int "id"
    *          @option string "to_number" Premium number
    *          @option string "from_number" Sender phone number
    *          @option string "date"
    *          @option int "limit" Limitation the number of responses
    *          @option string "text" Message
    */
    index:function(callback) {
        var params = {};
        return this.oSms.call('premium/index', params,callback);
   
    },
    /**
    * Sending replies for received SMS Premium
    *
    * @param array
    *      @option string $phone
    *      @option string $text Message
    *      @option string $gate Premium number
    *      @option int $id ID received SMS Premium
    * @return array
    *      @option bool "success"
    */
    send:function(params,callback) {
        
        return this.oSms.call('premium/send', params,callback);
   
    },
    /**
    * View quiz results
    * 
    * @param int $id
    * @return array
    *      @option int "id"
    *      @option string "name"
    *      @option array "items"
    *          @option int "id"
    *          @option int "count" Number of response
    */
    quiz:function(id,callback) {
        var params = {id:id};
        return this.oSms.call('quiz/view', params,callback);
   
    }
}
module.exports = premium;