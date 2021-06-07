var example = moment("2021-03-03");
var currentDayValue = moment();
var textExample = document.querySelector("#workplan");
var presentSchedule = document.querySelector(".present");
var pastClick = document.querySelector(".past");

$(".hour").text(example);
$(".present").text(currentDayValue);
$("#currentDay").text(currentDayValue);


    
    
 function  entryALL()  {
        var entry = prompt("Enter your event name.");
        var entryDate = prompt("Enter your schedule time.");
        var descriptionValue = document.getElementById("#description");
        console.log(entry + entryDate);
        $("#description").text(entryDate);
    }

pastClick.addEventListener('click', entryALL );
presentSchedule.addEventListener('click', entryALL);
