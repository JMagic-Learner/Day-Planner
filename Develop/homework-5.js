
var currentDayValue = moment();
var onlyMonthDayYear = moment().format("dddd MMMM Do YYYY hh:mm:ss");

var presentSchedule = document.querySelectorAll(".present");

var hoursOnly = 13;

moment().format("HH");
var hourcount = 8;

console.log(hoursOnly);
var value = 7;

    /* var local0800value = localStorage.getItem("0800");
    local0800value.textContent = browser0800value;
    
    
    
    var local0900value = localStorage.getItem("0900");
    document.getElementsByClassName("0900").value = browser0900value; 

    
    
    var local1000value = localStorage.getItem("1000");
    document.getElementsByClassName("1000").value = browser1000value;
    
    
    
    var local1100value = localStorage.getItem("1100");
    document.getElementsByClassName("1100").value = browser1100value;
   
   
    var local1200value = localStorage.getItem("1200");
    document.getElementsByClassName("1200").value = browser1200value;
    
    
    var local0100value = localStorage.getItem("0100");
    document.getElementsByClassName("0100").value = browser0100value;

    
    
    var browser0200value = document.getElementsByClassName("0200").value;
    document.getElementsByClassName("0200").value = browser0200value;

    
    var browser0300value = document.getElementsByClassName("0300").value;
    document.getElementsByClassName("0300").value = browser0300value;

    
    var browser0400value = document.getElementsByClassName("0400").value;
    document.getElementsByClassName("0400").value = browser0400value;

    
    var browser0400value = document.getElementsByClassName("0400").value;
    document.getElementsByClassName("0400").value = browser0400value;
*/




function determinePastBlock() {        
        var target = document.querySelector('.container').innerHTML += 
        '<div class = "time-block" id = "Timeblock"><label class = "hour-past"></label><textarea id = "then" class = "row past"></textarea><button class = "saveBtn"> SAVE </button></div>';
        
        
        
}

function determineCurrentBlock(){
    var currentHour = moment().format("HH");
    var target = document.querySelector('.container').innerHTML += 
        '<div class = "time-block" id = "Timeblock"><label class = "hour-present"></label><textarea id = "now" class = "row present"></textarea><button class = "saveBtn"> SAVE </button></div>';
       // $(".hour-present").text("Now");

        console.log ("the function has created one time block");   
}

function determineFutureBlock() {
    var currentHour = moment().format("HH");
    var target = document.querySelector('.container').innerHTML += 
    '<div class = "time-block" id = "Timeblock"><label class = "hour-future"></label><textarea id = "later" class = "row future"></textarea><button class = "saveBtn"> SAVE </button></div>';
        //$(".hour-future").text("Next");

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

        repeatNine();
        
       
        specificTime();
        save();

var saveACTION = document.querySelector(".saveBtn");
saveACTION.addEventListener("click", save);



function save() {
   /*  var browser0800value = document.getElementsByClassName("0800").value;
    localStorage.setItem("0800", browser0800value);
    var browser0900value = document.getElementsByClassName("0900").value;
    localStorage.setItem("0900", browser0900value);
    var browser1000value = document.getElementsByClassName("1000").value;
    localStorage.setItem("1000", browser1000value);
    var browser1100value = document.getElementsByClassName("1100").value;
    localStorage.setItem("1100", browser1100value);
    localStorage.setItem("1200", browser1200value);
    var browser1200value = document.getElementsByClassName("1200").value;
    localStorage.setItem("0100", browser0100value);
        var browser0100value = document.getElementsByClassName("0100").value;
        localStorage.setItem("0200", browser0200value);
        var local0200value = localStorage.getItem("0200");
        localStorage.setItem("0300", browser0300value);
        var local0300value = localStorage.getItem("0300");
        localStorage.setItem("0400", browser0400value);
        var local0400value = localStorage.getItem("0400");
        localStorage.setItem("0400", browser0400value);
        var local0400value = localStorage.getItem("0400");   
    
   */ 
    
}

function specificTime() {
            
$(document).ready(function(){
    $("div").children().eq(0).addClass("eight");
    $("div").children().eq(1).addClass("0800");
    $(".eight").text("08:00");
    $("div").next().eq(0).find("label").addClass("nine");
    $("div").next().eq(0).find("textarea").addClass("0900");
    $(".nine").text("09:00");
    $("div").eq(1).next().find("label").addClass("ten");
    $("div").eq(1).next().find("textarea").addClass("1000");
    $(".ten").text("10:00");
    $("div").eq(2).next().find("label").addClass("eleven");
    $("div").eq(2).next().find("textarea").addClass("1100");
    $(".eleven").text("11:00");
    $("div").eq(3).next().find("label").addClass("twelve");
    $("div").eq(3).next().find("textarea").addClass("1200");
    $(".twelve").text("12:00");
    $("div").eq(4).next().find("label").addClass("one");
    $("div").eq(4).next().find("textarea").addClass("0100");
    $(".one").text("01:00");
    $("div").eq(5).next().find("label").addClass("two");
    $("div").eq(5).next().find("textarea").addClass("0200");
    $(".two").text("02:00");
    $("div").eq(6).next().find("label").addClass("three");
    $("div").eq(6).next().find("textarea").addClass("0300");
    $(".three").text("03:00");
    $("div").eq(7).next().find("label").addClass("four");
    $("div").eq(7).next().find("textarea").addClass("0400");
    $(".four").text("04:00");
    $("div").eq(8).next().find("label").addClass("five");
    $("div").eq(8).next().find("textarea").addClass("0500");
    $(".five").text("05:00");
});
}