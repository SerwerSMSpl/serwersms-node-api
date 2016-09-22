var sms = {
    
    username: null,
    password: null,
    api_url: 'https://api2.serwersms.pl/',
    format:'json',
    system:'client_nodejs',
    oMessages:null,
    oFiles:null,
    oPremium:null,
    oAccount:null,
    oSenders:null,
    oGroups:null,
    oContacts:null,
    oPhones:null,
    oSubAccounts:null,
    oBlacklist:null,
    oPayments:null,
    oStats:null,
    oTemplates:null,
    oError:null,
    data:null,
    oRequest:null,
    
    init:function(){
      
        this.oMessages    = this.messages(); 
        this.oFiles       = this.files();
        this.oPremium     = this.premium();
        this.oAccount     = this.account();
        this.oSenders     = this.senders();
        this.oGroups      = this.groups();
        this.oContacts    = this.contacts();
        this.oPhones      = this.phones();
        this.oSubAccounts = this.subaccounts();
        this.oBlacklist   = this.blacklist();
        this.oPayments    = this.payments();
        this.oStats       = this.stats();
        this.oTemplates   = this.templates();
        this.oError       = this.error();
    },
    call:function(url,params,callback){
  
        params.username = this.username;
        params.password = this.password;
        
        params.system = this.system;
        
        this.oRequest = require('request');
        var req = this.oRequest.post(
            this.api_url+url,
            { 
                form: params  
            }
        );
        req.on('response', function (response) {
            var body = '';
            response.on('data', function (data) {
                body += data;    
            });

            response.on('end', function(){
                callback(body);
            });            
        });
        
    },
    
    messages:function(){
        
        var oMessages = require('./module/messages.js');
        oMessages.init();
        return oMessages;
    },
    files:function(){
        
        var oFiles = require('./module/files.js');
        oFiles.init();
        return oFiles;
    },
    premium:function(){
        
        var oPremium = require('./module/premium.js');
        oPremium.init();
        return oPremium;
    },
    account:function(){
        
        var oAccount = require('./module/account.js');
        oAccount.init();
        return oAccount;
    },
    senders:function(){
        
        var oSenders = require('./module/senders.js');
        oSenders.init();
        return oSenders;
    },
    groups:function(){
        
        var oGroups = require('./module/groups.js');
        oGroups.init();
        return oGroups;
    },
    contacts:function(){
        
        var oContacts = require('./module/contacts.js');
        oContacts.init();
        return oContacts;
    },
    phones:function(){
        
        var oPhones = require('./module/phones.js');
        oPhones.init();
        return oPhones;
    },
    subaccounts:function(){
        
        var oSubAccounts = require('./module/sub_accounts.js');
        oSubAccounts.init();
        return oSubAccounts;
    },
    blacklist:function(){
        
        var oBlacklist = require('./module/blacklist.js');
        oBlacklist.init();
        return oBlacklist;
    },
    payments:function(){
        
        var oPayments = require('./module/payments.js');
        oPayments.init();
        return oPayments;
    },
    stats:function(){
        
        var oStats = require('./module/stats.js');
        oStats.init();
        return oStats;
    },
    templates:function(){
        
        var oTemplates = require('./module/templates.js');
        oTemplates.init();
        return oTemplates;
    },
    error:function(){
        
        var oError = require('./module/error.js');
        oError.init();
        return oError;
    }
    
};
module.exports = sms;