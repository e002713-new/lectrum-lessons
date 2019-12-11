var login = '1';

var message =  (login == 'Pitter') ? 'Hi' :
               (login == 'Owner') ? 'Hello' :
               (login == '') ? 'unknown' : ''; 
               
console.log(message);