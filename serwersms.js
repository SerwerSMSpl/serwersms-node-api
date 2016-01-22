exports.serwerSMS = function(username,password)
{
        var sms = require('./sms.js');
        
        sms.username = username;
        sms.password = password;
        sms.init();
        return sms;
};