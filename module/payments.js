var payments = {
    oSms: null,
    init:function(){
        this.oSms = require('./../sms.js');
    },
    /**
    * List of payments
    * 
    * @return array
    *      @option array "items"
    *          @option int "id"
    *          @option string "number"
    *          @option string "state" paid|not_paid
    *          @option float "paid"
    *          @option float "total"
    *          @option string "payment_to"
    *          @option string "url"
    */
    index:function(callback) {
        var params = {};
        return this.oSms.call('payments/index', params,callback);
   
    },
    /**
    * View single payment
    * 
    * @param int $id
    * @return array
    *      @option int "id"
    *      @option string "number"
    *      @option string "state" paid|not_paid
    *      @option float "paid"
    *      @option float "total"
    *      @option string "payment_to"
    *      @option string "url"
    */
    view:function(id,callback) {
        var params = {id:id};
        return this.oSms.call('payments/view', params,callback);
   
    },
    /**
    * Download invoice as PDF
    * 
    * @param int $id
    * @return resource
    */
    invoice:function(id,callback) {
        var params = {id:id};
        return this.oSms.call('payments/invoice', params,callback);
   
    }
}
module.exports = payments;