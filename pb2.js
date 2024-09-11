function sendNotification(email) {
    const result = email.split('@');
    return email.includes('@') == true ? result[0] + ' sent you an email from ' + result[1] : 'Invalid Input';
}

console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));
