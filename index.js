// write your code below!
function happyHolidays(){
  return(`Happy holidays!`)
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`;
  var name = "you";
}

function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`;
  var holiday = "Independence Day";
  var name = "you";
}

function holidayCountdown(holiday, days){
  return `It\'s ${days} days until ${holiday}!`;
  var holiday = "Mother's Day";
  var days = "20";
}



  describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")

