
var currentDayValue = moment();
var onlyMonthDayYear = moment().format("dddd MMMM Do YYYY hh:mm:ss");
var textExample = document.querySelector("#workplan");
var presentSchedule = document.querySelectorAll(".present");
var pastClick = document.querySelectorAll(".past");
var futureClick = document.querySelectorAll(".future");
var hoursOnly = 12;
//moment().format("HH");
var timeblockClick = document.querySelectorAll(".time-block");

console.log(hoursOnly);


var hourcount = 8;



    
    
 function  entryALL()  {
        var entry = prompt("Enter your event name.");
        var entryDate = prompt("Enter your schedule time.");
        var descriptionValue = document.getElementById("#description");
        console.log(entry + entryDate);
        $("#description").text(entryDate);
    }

function determinePastBlock() { 
        var target = document.querySelector('.container').innerHTML += 
        '<div class = "time-block" id = "Timeblock"><div class = "row past hour" id = "workplan"> </div> <label> Event </label><textarea class = "past" rows="2" cols="90"> </textarea></div>';
        $(".hour").text(onlyMonthDayYear);

        console.log ("the function has created one time block");    
}

function determineCurrentBlock(){
    var target = document.querySelector('.container').innerHTML += 
        '<div class = "time-block" id = "Timeblock"><div class = "row present hour" id = "workplan"></div></div>';
        $(".hour").text(onlyMonthDayYear);

        console.log ("the function has created one time block");   
}

function determineFutureBlock() {
    var target = document.querySelector('.container').innerHTML += 
    '<div class = "time-block" id = "Timeblock"><div class = "row future hour" id = "workplan"></div></div>';
    $(".hour").text(onlyMonthDayYear);

    console.log ("the function has created one time block");   
}




function repeatNine() {

    if (hoursOnly >= 8 && hoursOnly <= 17) {
        for (var i = 8; i < hoursOnly; i++){
            hourcount++;
            console.log("The function is adding HTML elements up to the current hour");
            determinePastBlock();
            
        }
        determineCurrentBlock();

        var remainder = 17 - hoursOnly
        for (var k = 0; k < remainder ; k++){
            hourcount++;
            console.log("The function is now adding elements beyond the current hour");
            determineFutureBlock();
        }



    } else if (hoursOnly < 8 || hoursOnly > 17) {
        for (var i = 0; i < 9; i++){
            hourcount++;
            console.log('The function is adding only 9 sets of HTML elements becuase the current hour is past standard business hours');
            determinePastBlock();
        }    
    }
}



$(".hour").text(onlyMonthDayYear);
$(".present").text(currentDayValue);
$("#currentDay").text(currentDayValue);
$(".future").text(onlyMonthDayYear);
   /* for (var i = 0; i <= 8; i++) {
        var hourTimeBlock = document.getElementById('#' + i);
        */

repeatNine();
