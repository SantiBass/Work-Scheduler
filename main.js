
var futureTime = moment()
var futuretTimeFinal = futureTime.add(2, "hour");
var currentHour = (moment().format('k')); //present hour
var currentTimeNoSeconds = moment().format('k'); //current hour No Seconds
var pastTime = moment().startOf('hour').fromNow();
var day = moment().format('dddd');
console.log(currentTimeNoSeconds);
console.log(pastTime);

setInterval(() => {
     var time = moment().format('MMMM Do YYYY, h:mm:ss a'); //present time
     $("#currentDay").text(time)

}, 1000);

//if statements to know if the time of the 
//rows is present, past , or future.

if (currentTimeNoSeconds == 9) {
     $("#9").addClass("present");
     console.log("red Present")
}
else if (currentTimeNoSeconds > 9) {
     $("#9").addClass("past");
     console.log("white Past")
} else {
     $("#9").addClass("future");
     console.log("green Future")
};
if (currentTimeNoSeconds == 10) {
     $("#10").addClass("present");
     console.log("green Present")
}
else if (currentTimeNoSeconds > 10) {
     $("#10").addClass("past");
     console.log("red Past")
} else {
     $("#10").addClass("future");
     console.log("green Future")
};
if (currentTimeNoSeconds == 11) {
     $("#11").addClass("present");
     console.log("green Present")
}
else if (currentTimeNoSeconds > 11) {
     $("#11").addClass("past");
     console.log("red Past")
} else {
     $("#11").addClass("future");
     console.log("green Future")
};

if (currentTimeNoSeconds == 12) {
     $("#12").addClass("present");
     console.log("green Present")
}
else if (currentTimeNoSeconds > 12) {
     $("#12").addClass("past");
     console.log("red Past")
} else {
     $("#12").addClass("future");
     console.log("green Future")
};
if (currentTimeNoSeconds == 13) {
     $("#13").addClass("present");
     console.log("green Present")
}
else if (currentTimeNoSeconds > 13) {
     $("#13").addClass("past");
     console.log("red Past")
} else {
     $("#13").addClass("future");
     console.log("green Future")
};
if (currentTimeNoSeconds == 14) {
     $("#14").addClass("present");
     console.log("green Present")
}
else if (currentTimeNoSeconds > 14) {
     $("#14").addClass("past");
     console.log("red Past")
} else {
     $("#14").addClass("future");
     console.log("green Future")
};

if (currentTimeNoSeconds == 15) {
     $("#15").addClass("present");
     console.log("green Present")
}
else if (currentTimeNoSeconds > 15) {
     $("#15").addClass("past");
     console.log("red Past")
} else {
     $("#15").addClass("future");
     console.log("green Future")
};
if (currentTimeNoSeconds == 16) {
     $("#16").addClass("present");
     console.log("green Present")
}
else if (currentTimeNoSeconds > 16) {
     $("#16").addClass("past");
     console.log("red Past")
} else {
     $("#16").addClass("future");
     console.log("green Future")
};

if (currentTimeNoSeconds == 17) {
     $("#17").addClass("present");
     console.log("green Present")
}
else if (currentTimeNoSeconds > 17) {
     $("#17").addClass("past");
     console.log("red Past")
} else {
     $("#17").addClass("future");
     console.log("green Future")
};




// funtion to store and get back entered tasks  and save buttons
function clickaroo(arg) {


     console.log(arg)
     console.log($(`#${arg}`).val())

     localStorage.setItem(arg, $(`#${arg}`).val())
     localStorage.getItem(arg, $(`#${arg}`).val())

};

$(`#9 `).val(localStorage.getItem("9"));
$(`#10`).val(localStorage.getItem("10"));
$(`#11`).val(localStorage.getItem("11"));
$(`#12`).val(localStorage.getItem("12"));
$(`#13`).val(localStorage.getItem("13"));
$(`#14`).val(localStorage.getItem("14"));
$(`#15`).val(localStorage.getItem("15"));
$(`#16`).val(localStorage.getItem("16"));
$(`#15`).val(localStorage.getItem("15"));






