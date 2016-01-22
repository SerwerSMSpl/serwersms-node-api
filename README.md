# SerwerSMS - nodeJS
Klient NodeJS do komunikacji zdalnej z API v2 SerwerSMS.pl

Konsola
```node
        npm install git://github.com/SerwerSMSpl/serwersms-node-api.git
        npm install request
```
Zalecane jest, aby komunikacja przez HTTPS API odbywała się z loginów utworzonych specjalnie do połączenia przez API. Konto użytkownika API można utworzyć w Panelu Klienta → Ustawienia interfejsów → HTTPS XML API → Użytkownicy.

Wysyłka SMS
```node
        var module = require('serwersms');

        try{

            var object = module.serwerSMS('demo','demo');

            var messages = object.oMessages;

            // SMS FULL

            var params = new Object();

            params.phone  = ['500600700'];
            params.text   = 'test';
            params.sender = 'INFORMACJA'; 
            params.details = true;
            params.test = true;

            var callback = function(data){

                var obj = JSON.parse(data);
                console.log(obj);
            }
            messages.sendSms(params,callback);

            // SMS ECO

            var params = new Object();

            params.phone  = ['500600700'];
            params.text   = 'test';
            params.sender = null; 
            params.details = true;
            params.test = true;

            var callback = function(data){

                var obj = JSON.parse(data);
                console.log(obj);
            }
            messages.sendSms(params,callback);

            // VOICE from text

            var params = new Object();

            params.phone  = ['500600700'];
            params.text   = 'test voice';
            params.details = true;
            params.test = true;

            var callback = function(data){

                var obj = JSON.parse(data);
                console.log(obj);
            }
            messages.sendVoice(params,callback);

            // MMS
            var files = object.oFiles;

            var callback = function(data){

                var list = JSON.parse(data);
                var params = new Object();
                //console.log(list);
                params.phone   = ['500600700'];
                params.title    = 'MMS Title';
                params.file_id = list.items[0].id;
                params.details = true;
                params.test    = false;
                messages.sendMms(params,function(response){
                    console.log('Error: '+response);
                });

            }
            files.index('mms',callback);

        }catch(err) {
            console.log(err.message);
        }

```
Wysyłka spersonalizowanych SMS

```node
	var module = require('serwersms');

        try{

            var object = module.serwerSMS('demo','demo');
            var messages = object.oMessages;
            var params = new Object();

            params.messages = 
            [
                { phone:'500600700',text:'pierwszy' },
                { phone:'500600700',text:'drugi' }
            ];

            params.sender = 'INFORMACJA'; 
            params.details = true;
            params.test = true;

            var callback = function(data){

                var obj = JSON.parse(data);
                console.log(obj);
            }
            messages.sendPersonalized(params,callback);

        }catch(err ) {
            console.log(err.message);
        }
```
Pobieranie raportów doręczeń

```node
	var module = require('serwersms');

        try{

            var object = module.serwerSMS('demo','demo');

            var messages = object.oMessages;

            var params = new Object();

            params = {id:['c7d505d346','4fbf1cd942']};
            var callback = function(data){

                var obj = JSON.parse(data);
                console.log(obj);
            }
            messages.reports(params,callback);

        }catch(err ) {
            console.log(err.message);
        }
```
Pobieranie wiadomości przychodzących

```node
	var module = require('serwersms');

        try{

            var object = module.serwerSMS('demo','demo');

            var messages = object.oMessages;

            var params = new Object();

            params.type = 'eco';
            var callback = function(data){

                var obj = JSON.parse(data);
                console.log(obj);
            }
            messages.recived(params,callback);

        }catch(err ) {
            console.log(err.message);
        }
```

## Dokumentacja
http://dev.serwersms.pl
