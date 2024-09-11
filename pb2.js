function sendNotification(email) {
    let email2 = '';
    let email3 = '';
    const index = email.indexOf('@');
    if(index >= 0 ){  
        for( let i = 0; i < index ; i++){
            email2 = email2.concat(email[i]);
        }
        for( let i = index + 1; i < email.length ; i++){
            email3 = email3.concat(email[i]);
        }
        return email2 + ' sent you an email from ' + email3;
    }
    else{
        return 'Invalid Email'
    }
}

console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));
