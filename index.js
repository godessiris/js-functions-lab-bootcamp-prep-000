// write your code below!
function happyHolidays(){
  return(`Happy holidays!`)
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`;
  var name = "you";
}

function happyHolidayTo(holiday, name){
  return `"happy ${holiday}, ${name}!"`;
  var holiday = "Independence Day";
  var name = "you";
}




describe('happyHolidayTo(holiday, name)', () => {
    it('returns "Happy ${holiday}, ${name}!"', () => {
      expect(happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
    })
  })

  describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
