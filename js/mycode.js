$(document).ready(function(){
//fading of the calender
$("html").fadeIn(2000);

//modal animation


// Get the date element that opens the modal
var date_modal = $('.dates li');
//creating an array for weekdays
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// When the user clicks the date element, open the modal
date_modal.click(function()
   {
    //clicked day
    var day = $(this).attr('data-hover');
    //insert the date to the modal header
    $('.modal_date').text($(this).attr('data-hover'));
    //insert the weekday to the modal header
    day=parseInt(day);

    var d = new Date('11/'+day+'/2017');
    console.log('d is: '+d);
    var dayName = days[d.getDay()];
    console.log(dayName);

    $('.modal_weekday').text(dayName);
    //insert the text in the modal body depending of the date

    if($(this).attr('data-hover')==11){
      $('.modal_body').text('Sint Maarten');
    }
    else if($(this).attr('data-hover')==17){
      $('.modal_body').text('Birthday of Karina');
    }
    else if($(this).attr('class')=='active'){
      $('.modal_body').text('No plans for today...');
    }
    else{
      $('.modal_body').text('No plans for that day...');
    }
    //display the modal
    $('#cal_modal').css('display','block');
   });

// When the user clicks on btn_close(x), close the modal
$('.btn_close').click(function()
  {
    $('#cal_modal').fadeOut('slow');
  });

// When the user clicks anywhere outside of the modal, close it
/*
$('body').click(function() {
  if ((!$(this.target).is('#cal_modal'))&&($('#cal_modal').css('display')=='block')) {
    $("#cal_modal").hide();
  }
});
*/
//end of modal animation
});
