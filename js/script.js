$(document).ready(function () //main function initial
{

  //Set options
  var speed = 500;             //fade speed
  var autoswitch = true;       //auto options
  var autoswitch_speed = 2500; // auto slider speed

  // Add initial active class
  $('.slide').first().addClass('active');

  // hide all slides
  $('.slide').hide();

  //show the first slide
  $('.active').show();

  $('#next').on('click', nextSlide);//next end

    $('#prev').on('click', prevSlide);//prev end

    if(autoswitch == true) //autoswitch
    {
      setInterval(nextSlide,autoswitch_speed);
    }//autoswitch end

    //switch next function

    function nextSlide()
    {

      $('.active').removeClass('active').addClass('oldActive');
      if($('.oldActive').is(':last-child'))
      {
          $('.slide').first().addClass('active');
      }
      else
      {
          $('.oldActive').next().addClass('active');
      }
      $('.oldActive').removeClass('oldActive');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);

    } //nextSlide end

    //switch prev function
    function prevSlide()
    {

      $('.active').removeClass('active').addClass('oldActive');
      if($('.oldActive').is(':first-child'))
      {
          $('.slide').last().addClass('active');
      }
      else
      {
          $('.oldActive').prev().addClass('active');
      }
      $('.oldActive').removeClass('oldActive');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);

    } //prevSlide end








}); //main function closing
