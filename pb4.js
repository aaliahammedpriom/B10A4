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
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 10,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 50,  schoolGrade: 30, isFFamily : false }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));

console.log(calculateFinalScore({ name: "Rajib", testScore: 145,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 10,  schoolGrade: 325, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 50,  schoolGrade: 320, isFFamily : false }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 425,  schoolGrade: 25, isFFamily : false }));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));
