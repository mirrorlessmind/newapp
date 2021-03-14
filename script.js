//Cigi Tipton Schedule
var timebox = $('.time-box');
timebox.each(function() {
var superTimebox =$(this);
var superTimeboxID = superTimebox.attr('id');
superTimeboxID = parseInt(superTimeboxID);
var currentHour = moment().hour();
var saveBtns = $('.saveBtns');
  
console.log('THE ID OF TH SUPER TIME BLOCK IS', superTimeboxID);
console.log('The Current Hour IS', currentHour)

}
             
