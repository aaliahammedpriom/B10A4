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
console.log(waitingTime([ 3, 5, 7, 11, 6 ] , 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7,10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));