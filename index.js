// write your code below!


function happyHolidays(){
return "Happy holidays!"
}
function happyHolidaysto(name){
  return `Happy holidays, ${name}!`
}
function happyHolidayTo(holiday , name){
  return `Happy ${holiday}, ${name}!`
}
function holidayCountdown(days , holiday){
  return `It's ${days} days until ${holiday}!`
}

happyHolidays();
happyHolidayTo("you");
happyHolidaysto("Independence Day" ,  "you");
holidayCountdown(20 , "Independence Day" );