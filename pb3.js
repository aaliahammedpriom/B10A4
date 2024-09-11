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
console.log(checkDigitsInName('Raj123'));
console.log(checkDigitsInName('n9ayeem'));
console.log(checkDigitsInName('e1mu3'));
console.log(checkDigitsInName('Suman'));
console.log(checkDigitsInName('Name2024'));
console.log(checkDigitsInName('!@#'));
console.log(checkDigitsInName(["Raj"]));