// Global variables

var hour9SaveButton = $('#hour-9').children().eq(2);
var hour10SaveButton = $('#hour-10').children().eq(2);
var hour11SaveButton = $('#hour-11').children().eq(2);
var hour12SaveButton = $('#hour-12').children().eq(2);
var hour13SaveButton = $('#hour-13').children().eq(2);
var hour14SaveButton = $('#hour-14').children().eq(2);
var hour15SaveButton = $('#hour-15').children().eq(2);
var hour16SaveButton = $('#hour-16').children().eq(2);
var hour17SaveButton = $('#hour-17').children().eq(2);

$(function () {

  // Sets current date in page header
  var today = dayjs();

  if (today.format('D') == 1 || today.format('D') == 21 || today.format('D') == 31)
  {
    $('#currentDay').text(today.format('dddd, MMMM DD[st]'));
  }

  else if (today.format('D') == 2 || today.format('D') == 22)
  {
    $('#currentDay').text(today.format('dddd, MMMM DD[nd]'));
  }

  else if (today.format('D') == 3 || today.format('D') == 23)
  {
    $('#currentDay').text(today.format('dddd, MMMM DD[rd]'));
  }

  else
  {
    $('#currentDay').text(today.format('dddd, MMMM DD[th]'));
  }
  
  
  // Event listeners for each time block to listen for clicks on save button
  // and add text content to local storage

  hour9SaveButton.on('click', function () {
     var eventText = $('#hour-9').children().eq(1).val();
     localStorage.setItem("hour-9 Events", eventText);
  });

  hour10SaveButton.on('click', function () {
     var eventText = $('#hour-10').children().eq(1).val();
     localStorage.setItem("hour-10 Events", eventText);
  });

  hour11SaveButton.on('click', function () {
     var eventText = $('#hour-11').children().eq(1).val();
     localStorage.setItem("hour-11 Events", eventText);
  });

  hour12SaveButton.on('click', function () {
     var eventText = $('#hour-12').children().eq(1).val();
     localStorage.setItem("hour-12 Events", eventText);
  });

  hour13SaveButton.on('click', function () {
     var eventText = $('#hour-13').children().eq(1).val();
     localStorage.setItem("hour-13 Events", eventText);
  });

  hour14SaveButton.on('click', function () {
     var eventText = $('#hour-14').children().eq(1).val();
     localStorage.setItem("hour-14 Events", eventText);
  });

  hour15SaveButton.on('click', function () {
     var eventText = $('#hour-15').children().eq(1).val();
     localStorage.setItem("hour-15 Events", eventText);
  });

  hour16SaveButton.on('click', function () {
     var eventText = $('#hour-16').children().eq(1).val();
     localStorage.setItem("hour-16 Events", eventText);
  });

  hour17SaveButton.on('click', function () {
     var eventText = $('#hour-17').children().eq(1).val();
     localStorage.setItem("hour-17 Events", eventText);
  });

  // Apply past, present, and future classes to each time block

  // Get current hour in 24-hour format
  var currentHour = today.format('H');

  // Loop through each hour 9 through 17 in a 24 hour format
  for (var i = 9; i < 18; i++)
  {
    // Set class to present if hour ID number matches current hour
    if (parseInt($('#hour-' + i).attr("id").replace(/hour-/, '')) == currentHour)
    {
      $('#hour-' + i).attr('class', 'row time-block present');
    }
    
    // Set class to past if hour ID number is less than current hour
    else if (parseInt($('#hour-' + i).attr("id").replace(/hour-/, '')) < currentHour)
    {
      $('#hour-' + i).attr('class', 'row time-block past');
    }

    // Set class to past if hour ID number is greater than current hour
    else if (parseInt($('#hour-' + i).attr("id").replace(/hour-/, '')) > currentHour)
    {
      $('#hour-' + i).attr('class', 'row time-block future');
    }
  }

  // Loop through all possible local storage keys
  for (var i = 9; i < 18; i++)
  {
    // Set text content of event block to value of local storage key if that local storage key exists
    if (localStorage.getItem("hour-" + i + " Events") !== null)
    {
      $('#hour-' + i).children().eq(1).text(localStorage.getItem("hour-" + i + " Events"));
    }
  }
});
