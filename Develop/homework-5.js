
var currentDayValue = moment();
var onlyMonthDayYear = moment().format("dddd MMMM Do YYYY hh:mm:ss");
var textExample = document.querySelector("#workplan");
var presentSchedule = document.querySelectorAll(".present");

var hoursOnly = 15;
//moment().format("HH");
var hourcount = 8;

console.log(hoursOnly);
var value = 7;





    
    
 function  entryALL()  {
        var entry = prompt("Enter your event name.");
        var entryDate = prompt("Enter your schedule time.");
        var descriptionValue = document.getElementById("#description");
        console.log(entry + entryDate);
        $("#description").text(entryDate);
    }

function determinePastBlock() {        
        var target = document.querySelector('.container').innerHTML += 
        '<div class = "time-block" id = "Timeblock"><label class = "hour-past"></label><textarea class = "row past"></textarea><button class = "saveBtn"> SAVE </button></div>';
        $(".hour-past").text("Past");
        //var storeTEXT = document.getElementById("row").value;
        //console.log (hourcount);
        //localStorage.setItem('data', 'storeTEXT'); 
}

function determineCurrentBlock(){
    var currentHour = moment().format("HH");
    var target = document.querySelector('.container').innerHTML += 
        '<div class = "time-block" id = "Timeblock"><label class = "hour-present"></label><textarea class = "row present"></textarea><button class = "saveBtn"> SAVE </button></div>';
        $(".hour-present").text("Now");

        console.log ("the function has created one time block");   
}

function determineFutureBlock() {
    var currentHour = moment().format("HH");
    var target = document.querySelector('.container').innerHTML += 
    '<div class = "time-block" id = "Timeblock"><label class = "hour-future"></label><textarea class = "row future"></textarea><button class = "saveBtn"> SAVE </button></div>';
        $(".hour-future").text("Next");

    console.log ("the function has created one time block");   
}




function repeatNine() {
     
    if (hoursOnly >= 8 && hoursOnly <= 17) {
        
        for (var i = 8; i < hoursOnly; i++){
            
            console.log("The function is adding HTML elements up to the current hour");
            determinePastBlock();
            
        }
    
        determineCurrentBlock();

        var remainder = 17 - hoursOnly
        for (var k = 0; k < remainder ; k++){
            
            console.log("The function is now adding elements beyond the current hour");
            determineFutureBlock();
        }



    } else if (hoursOnly < 8 || hoursOnly > 17) {
        for (var i = 0; i < 9; i++){
           
            console.log('The function is adding only 9 sets of HTML elements becuase the current hour is past standard business hours');
            determinePastBlock();
        }    
    }
}




$(".present").text(currentDayValue);
$("#currentDay").text(currentDayValue);
$(".future").text(onlyMonthDayYear);
   /* for (var i = 0; i <= 8; i++) {
        var hourTimeBlock = document.getElementById('#' + i);
        */
var setDown = localStorage.getItem('data');
$('.hour').text(setDown);
repeatNine();

var saveACTION = document.querySelector(".saveBtn");
saveACTION.addEventListener("click", save);
function save() {
     localStorage.setItem('data', 'value');
     var value = localStorage.getItem('data')
     $('.row').text(value);
}
