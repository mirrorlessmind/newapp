//Cigi Tipton Schedule
//Help from TA

let saveButton = $(".btn");


//Moment used to display current day on top.
let timeStamp = $("#currentDay");
timeStamp.text(moment().format("dddd, MMMM Do, YYYY"));

//added color coding to time blocks
let timeColor = $(".timeblock");
var getTime = (moment().format("H"));

console.log(getTime);

function colorCode () {
    for (let id=8; id<18; id++) {
        let colorBlock = $("#" + id).children(".planner").text(localStorage.getItem(id));
        if (id == getTime) {
            colorBlock.addClass("present")
        }
        else if (id < getTime) {
            colorBlock.addClass("past")
        }
        else if (id > getTime) {
            colorBlock.addClass("future")
        }
    }
}

colorCode();

//events saved to local storage
function saveEvent(event) {
    event.preventDefault();
    var eventInput = $(event.target).parent().children(".planner");

    console.log(eventInput.val());
    var timeSlot = $(event.target).parent().attr("id");
    console.log(timeSlot);
    localStorage.setItem(timeSlot, eventInput.val());
}



saveButton.on("click", saveEvent);

