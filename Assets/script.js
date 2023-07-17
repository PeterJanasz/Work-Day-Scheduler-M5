//gets the current time and date
//not working??Moved inside $(doc).ready(func)


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
// TODO: Add code to display the current date in the header of the page.
  var currentDay = dayjs().format('dddd, MMMM D YYYY');
  var currentTime = dayjs().format('h:mm A')

  $("#currentDay").html(currentDay);
  $("#currentTime").html(currentTime);
  console.log(dayjs)

  //Jquery onclick event (A)
  $(".saveBtn").on("click", function () {
    //get value from textarea in html
    var text = $(this).siblings(".description").val();
    //get the time block from hour id
    var time = $(this).parent().attr("id");
    console.log(text)
    console.log(time)

    localStorage.setItem(time, text);
  })

  function timeTracker() {
    //gets the current hour
    var timeNow = dayjs().hour();

    //create array for current time to apply past, present, future class for each timeBlock (B)
    $(".time-block").each(function () {
      //take string value and return a number aka parseInt
      //split hour id into an array
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      //add class according to current time of day
      //parse TimeNow to get appropriate value from string to integer to comapre blockTime integer value
      if (blockTime < parseInt(timeNow)) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockTime === parseInt(timeNow)) {
        $(this).removeClass("future");
        $(this).addClass("present");
        $(this).removeClass("past");
      }
      else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }

    })
  }
//retrieve local storage input
$(".time-block").each(function () {
var time = $(this).attr("id");
var savedText = localStorage.getItem(time);

if (savedText !== null) {
  $(this).find(".description").val(savedText);
}
});
  timeTracker();
});
  // A) TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // B) TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // C) TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  

