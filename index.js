 //return the number of hours you slept that night.
 function SleepHours(day){
    if (day=== 'Monday'){
        return 8
    }
    else if(day === 'Tuesday'){
        return 7
    }
    else if(day === 'Wednesday'){
        return 5
    }
    else if(day === 'Thursday'){
        return 6
    }
    else if(day === 'Friday'){
        return 9;
    }
    else if(day === 'Saturday'){
        return 4;
    }
    else if(day === 'Sunday'){
        return 10
    }
    else{
        return "invalid day";
    }
 }
 console.log(SleepHours('Friday'));
 //total sleep hours that you slept
 function ActualSleepHours(){
    return SleepHours('Monday') + SleepHours('Tuesday') + SleepHours('Wednesday') + SleepHours('Thursday') + SleepHours('Friday') + SleepHours('Saturday') + SleepHours('Sunday');
}
 console.log("total sleep hours that you slept" +' ' +ActualSleepHours());
 // the ideal sleep hours that you prefer
 function IdealSleepHours(){ 
        const idealHours = 8;
        return idealHours * 7;
 }
 console.log("the ideal sleep hours that you prefer"+''+IdealSleepHours());
//it’s time to calculate sleep debt.
 function calculateSleepDebt(){
    const actualSleepHours = ActualSleepHours();
    const idealSleepHours = IdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('perfect amount of sleep');
      } else if (actualSleepHours > idealSleepHours) {
        console.log('the user got more sleep than needed');
      } else {
        console.log('the user should get some rest');
      }
      if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
      }
   
}
calculateSleepDebt();

