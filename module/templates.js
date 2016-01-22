var templates = {
    oSms: null,
    init:function(){
        this.oSms = require('./../sms.js');
    },
    /**
    * List of templates
    * @param array $params
    *      @option string "sort" Values: name
    *      @option string "order" Values: asc|desc
    * @return array
    *      @option array "items"
    *          @option int "id"
    *          @option string "name"
    *          @option string "text"
    */
    
    index:function(params,callback) {
        
        return this.oSms.call('templates/index', params,callback);
   
    },
    /**
    * Adding new template
    * 
    * @param array
    *      @option string $name
    *      @option string $text
    * @return array
    *      @option array
    *          @option bool "success"
    *          @option int "id"
    */
    add:function(params,callback) {
        
        return this.oSms.call('templates/add', params,callback);
   
    },
    /**
    * Editing a template
    * 
    * @param array
    *      @option int $id
    *      @option string $name
    *      @option string $text
    * @return array
    *      @option bool "success"
    *      @option int "id"
    */
    edit:function(params,callback) {
        
        return this.oSms.call('templates/edit', params,callback);
   
    },
    /**
    * Deleting a template
    * 
    * @param int $id
    * @return array
    *      @option bool "success"
    */
    delete:function(id,callback) {
        
        var params = {id:id};
        return this.oSms.call('templates/delete', params,callback);
   
    }
}
module.exports = templates;