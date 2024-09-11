function calculateTax(income, expenses) {
    if( income >= expenses && expenses >= 0 && income >= 0){
        const dif = (income - expenses);
        const tax = (dif *.20);
        return tax;
    }
    else{
        return 'Invalid Input';
    }
}

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

function checkDigitsInName(name){
    if( !Array.isArray(name) && typeof name == 'string' ){
        if( name.includes(0) || name.includes(1) || name.includes(2) || name.includes(3) || name.includes(4) || name.includes(5) || name.includes(6) || name.includes(7) || name.includes(8) || name.includes(9) ){
            return true;
        }
        else{
            return false;
        }
       
    }
    else{
        return 'Invalid Input';
    }
}

function calculateFinalScore(obj){
    let total ;
    if(typeof obj == 'object' && !Array.isArray(obj)){
        if(obj.testScore <=50 && obj.schoolGrade <=30 && obj.isFFamily == true){
            total = obj.testScore + obj.schoolGrade + 20;
            if(total >= 80){
                return true;
            }
            else{
                return false;
            }
        }
        else if(obj.testScore <=50 && obj.schoolGrade <=30 && obj.isFFamily == false){
            total = obj.testScore + obj.schoolGrade;
            if(total >= 80){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
    else{
        return 'Invalid Input';
    }

}

function  waitingTime(waitingTimes  , serialNumber){
    if(Array.isArray(waitingTimes) && typeof serialNumber == 'number'){ 
        let totalTime = 0;
        for(let waitTime of waitingTimes){
          totalTime = totalTime + waitTime;
        }
        const avgTime = totalTime/ waitingTimes.length;
        const pendingSerial = serialNumber - (waitingTimes.length + 1);
        const time = pendingSerial* Math.round(avgTime);
        return time;
    }
    else{
        return 'Invalid Input'
    }
}




console.log(calculateTax(10000,3000));
console.log(calculateTax(34000,1753));
console.log(calculateTax(5000,1500));
console.log(calculateTax(7000,7000));
console.log(calculateTax(-5000,2000));
console.log(calculateTax(6000,-1500));
console.log('......................................................');
console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));
console.log('......................................................');
console.log(checkDigitsInName('Raj123'));
console.log(checkDigitsInName('n9ayeem'));
console.log(checkDigitsInName('e1mu3'));
console.log(checkDigitsInName('Suman'));
console.log(checkDigitsInName('Name2024'));
console.log(checkDigitsInName('!@#'));
console.log(checkDigitsInName(["Raj"]));
console.log('......................................................');
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));
console.log('......................................................');
console.log(waitingTime([ 3, 5, 7, 11, 6 ] , 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7,10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
console.log('......................................................');