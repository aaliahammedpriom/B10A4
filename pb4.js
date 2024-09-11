function calculateFinalScore(obj){
    return (typeof obj == 'object' && !Array.isArray(obj)) ? ((obj.testScore <=50 && obj.schoolGrade <=30 && obj.isFFamily == true) ? ((obj.testScore + obj.schoolGrade + 20)>= 80 ? true : false) : ((obj.testScore <=50 && obj.schoolGrade <=30 && obj.isFFamily == false)? ((obj.testScore + obj.schoolGrade)>= 80 ? true : false) :false)) : 'Invalid Input';

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
