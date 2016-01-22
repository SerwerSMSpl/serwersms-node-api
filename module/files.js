var files = {
    oSms: null,
    init:function(){
        this.oSms = require('./../sms.js');
    },
    /**
    * List of files
    * 
    * @param string $type - mms|voice
    * @return array
    *      @option array "items"
    *          @option string "id"
    *          @option string "name"
    *          @option int "size"
    *          @option string "type" - mms|voice
    *          @option string "date"
    */
    index:function(type,callback) {
        var params = { type:type };
        return this.oSms.call('files/index', params,callback);
   
    },
    /**
    * Add new file
    * 
    * @param string $type - mms|voice
    * @param array $params
    *      @option string "url" URL address to file
    *      @option resource "file" A file handler (only for MMS)
    * @return array
    *      @option bool "success"
    *      @option string "id"
    */
    add:function(type,callback) {
        var params = { type:type };
        return this.oSms.call('files/add', params,callback);
   
    },
    /**
    * View file
    *
    * @param array
    *      @option string "id"
    *      @option string $type - mms|voice

    * @return array
    *      @option string "id"
    *      @option string "name"
    *      @option int "size"
    *      @option string "type" - mms|voice
    *      @option string "date"
    */
    view:function(params,callback) {
      
        return this.oSms.call('files/view', params,callback);
   
    },
    /**
    * View file
    *
    * @param array
    *      @option string "id"
    *      @option string $type - mms|voice

    * @return array
    *      @option bool "success"
    */
    delete:function(params,callback) {
      
        return this.oSms.call('files/delete', params,callback);
   
    }
}
module.exports = files;