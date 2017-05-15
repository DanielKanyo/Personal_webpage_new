var start_cout = true;
var start_cout2 = true;

$(document).ready(function () {

  var facebook_icon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path class="fill" d="M134.941,272.691h56.123v231.051c0,4.562,3.696,8.258,8.258,8.258h95.159 c4.562,0,8.258-3.696,8.258-8.258V273.78h64.519c4.195,0,7.725-3.148,8.204-7.315l9.799-85.061c0.269-2.34-0.472-4.684-2.038-6.44 c-1.567-1.757-3.81-2.763-6.164-2.763h-74.316V118.88c0-16.073,8.654-24.224,25.726-24.224c2.433,0,48.59,0,48.59,0 c4.562,0,8.258-3.698,8.258-8.258V8.319c0-4.562-3.696-8.258-8.258-8.258h-66.965C309.622,0.038,308.573,0,307.027,0 c-11.619,0-52.006,2.281-83.909,31.63c-35.348,32.524-30.434,71.465-29.26,78.217v62.352h-58.918c-4.562,0-8.258,3.696-8.258,8.258 v83.975C126.683,268.993,130.379,272.691,134.941,272.691z"/></svg>';
  var instagram_icon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 169.063 169.063" style="enable-background:new 0 0 169.063 169.063;" xml:space="preserve"><path class="fill" d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752 c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407 c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752 c17.455,0,31.656,14.201,31.656,31.655V122.407z"/><path class="fill" d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561 C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561 c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"/><path class="fill" d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78 c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78 C135.661,29.421,132.821,28.251,129.921,28.251z"/></svg>';
  var fivepx_icon = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 106.901 106.901" style="enable-background:new 0 0 106.901 106.901;" xml:space="preserve"><g id="XMLID_42_"><path class="fill" id="XMLID_74_" d="M58.767,94.652c19.545,0,35.446-15.901,35.446-35.446S78.312,23.76,58.767,23.76 c-9.751,0-18.902,3.993-25.492,10.811V6h48.757c1.657,0,3-1.343,3-3s-1.343-3-3-3H30.275c-1.657,0-3,1.343-3,3v39.867l-0.035,0.731 c-0.065,1.397,0.843,2.655,2.189,3.031c1.351,0.377,2.776-0.229,3.443-1.457c5.165-9.507,15.087-15.413,25.895-15.413 c16.236,0,29.446,13.209,29.446,29.446s-13.21,29.446-29.446,29.446c-5.459,0-10.643-1.536-15.109-4.213V59.206 c0-8.332,6.778-15.11,15.109-15.11s15.109,6.778,15.109,15.11s-6.778,15.11-15.109,15.11c-2.017,0-3.974-0.39-5.817-1.16 c-1.523-0.638-3.285,0.083-3.924,1.613c-0.638,1.529,0.084,3.286,1.613,3.924c2.579,1.077,5.313,1.623,8.128,1.623 c11.64,0,21.109-9.47,21.109-21.11s-9.47-21.11-21.109-21.11s-21.109,9.47-21.109,21.11v20.502 c-3.378-3.466-5.935-7.775-7.281-12.658c-0.44-1.597-2.091-2.536-3.689-2.095c-1.598,0.44-2.535,2.092-2.096,3.689 C28.813,83.958,42.865,94.652,58.767,94.652z"/><path class="fill" id="XMLID_75_" d="M40.739,15.157c-1.514,0.672-2.196,2.445-1.524,3.959c0.672,1.513,2.443,2.198,3.96,1.524 c9.402-4.175,27.877-8.537,45.937,9.173c0.584,0.573,1.343,0.858,2.101,0.858c0.777,0,1.555-0.3,2.142-0.899 c1.16-1.183,1.142-3.083-0.041-4.243C71.953,4.583,49.43,11.297,40.739,15.157z"/><path class="fill" id="XMLID_76_" d="M94.379,86.299c-1.251-1.086-3.146-0.955-4.232,0.296c-7.905,9.092-19.343,14.307-31.38,14.307 c-21.147,0-38.9-15.819-41.295-36.797c-0.188-1.646-1.678-2.832-3.32-2.64c-1.646,0.188-2.829,1.674-2.641,3.321 c2.74,24.01,23.056,42.117,47.256,42.117c13.774,0,26.862-5.967,35.907-16.37C95.761,89.281,95.629,87.386,94.379,86.299z"/><path class="fill" id="XMLID_77_" d="M51.133,66.479c0.587,0.595,1.361,0.894,2.136,0.894c0.761,0,1.522-0.288,2.106-0.864l3.081-3.038 l3.038,3.08c0.587,0.595,1.361,0.894,2.136,0.894c0.761,0,1.522-0.288,2.106-0.864c1.18-1.164,1.193-3.063,0.029-4.243l-3.037-3.08 l2.969-2.927c1.18-1.164,1.193-3.063,0.029-4.243c-1.164-1.18-3.064-1.193-4.242-0.03l-2.969,2.928l-2.928-2.969 c-1.164-1.18-3.064-1.193-4.242-0.03c-1.18,1.164-1.193,3.063-0.029,4.243l2.927,2.968l-3.08,3.038 C49.983,63.4,49.969,65.299,51.133,66.479z"/></g></svg>';
  var github_icon = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 438.549 438.549" style="enable-background:new 0 0 438.549 438.549;" xml:space="preserve"><g><path class="fill" d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906C438.536,184.851,428.728,148.168,409.132,114.573z"/></g></svg>';
  $('.facebook').html(facebook_icon);
  $('.instagram').html(instagram_icon);
  $('.fivepx').html(fivepx_icon);
  $('.github').html(github_icon);

  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /20 +'%)' //0px horizontalis iranyba
    });

    /* Skills fade in */
    if(start_cout == true) {
      if (wScroll > $('.skills_content').offset().top - ($(window).height() / 1.7)) {
        $('.skills_list').each(function(i){
          setTimeout(function(){
            $('.skills_list').eq(i).addClass('is-showing');
          }, 150 * (i+1));

          /* Call start_delay */
          if(start_cout == true) {
            start_delay();
            start_cout = false;
          }
        });
      }
    }
    /* Contact fade in */
    if (wScroll > $('.contact_container').offset().top - ($(window).height() / 1.8)) {
      $('.contact_block').each(function(i){
        setTimeout(function(){
          $('.contact_block').eq(i).addClass('show-contact');
        }, 150 * (i+1));
      });
    }
    /* Images fade in */
    if (wScroll > $('.photography_content').offset().top - ($(window).height() / 1.7)) {
      $('.image').each(function(i){
        setTimeout(function(){
          $('.image').eq(i).addClass('show-images');
        }, 150 * (i+1));
      });
    }

    /* Skills scrolling */
    /* Next button */
    $('#next_button').click(function() {

      $('.first').removeClass('hide_show');

      $('.skills_page2').addClass('show_page2');
      if (start_cout2) {
        start_delay2();
        start_cout2 = false;
      }

      $('.skills_list').each(function(i){
        setTimeout(function(){
          $('.skills_list').eq(i).removeClass('is-showing');
        }, 100 * (i+1));
      });

      $('.skills_list2').each(function(i){
        setTimeout(function(){
          $('.skills_list2').eq(i).addClass('is-showing2');
        }, 100 * (i+1));
      });

      $('.second').addClass('hide_show');

    });
    /* Prev button */
    $('#prev_button').click(function() {

      $('.second').removeClass('hide_show');

      $('.skills_list').each(function(i){
        setTimeout(function(){
          $('.skills_list').eq(i).addClass('is-showing');
        }, 100 * (i+1));
      });

      $('.skills_list2').each(function(i){
        setTimeout(function(){
          $('.skills_list2').eq(i).removeClass('is-showing2');
        }, 100 * (i+1));
      });

      $('.first').addClass('hide_show');
      setTimeout(function() {
        $('.skills_page2').removeClass('show_page2');
      }, 800);

    });

  });

  var menuSVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve"><g><g id="menu"><path class="fill" d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z"/></g></g></svg>';
  var closeSVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve"><g><g id="close"><polygon class="fill" points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5"/></g></g></svg>';
  $('.menu_icon').html(menuSVG);
  $('.close_icon').html(closeSVG);

  //Click on menu icon
  $('#menu_icon').click(function() {
    $('.menu_button').animate({left: '-55px'}, 200);
    $('#menu_block').css('display','inline');
    $('#menu_block').animate({left: '0px'}, 200);
  });

  //Click on close icon
  $('#close_icon').click(function() {
    $('.menu_button').animate({left: '15px'}, 200);
    $('#menu_block').animate({left: '-250px'}, 200);
  });

  //Scroll to
  $('#aboutme').click(function() {
    $('html, body').animate({
      scrollTop: $("#about_me_content").offset().top -80
    }, 300);
  });
  $('#skills').click(function() {
    $('html, body').animate({
      scrollTop: $("#skills_content").offset().top -80
    }, 300);
  });
  $('#opinions').click(function() {
    $('html, body').animate({
      scrollTop: $("#opinion_content").offset().top -80
    }, 300);
  });
  $('#hobbies').click(function() {
    $('html, body').animate({
      scrollTop: $("#photography_content").offset().top -80
    }, 300);
  });
  $('#contact').click(function() {
    $('html, body').animate({
      scrollTop: $("#contact_container").offset().top -80
    }, 300);
  });
  $('#top').click(function() {
    $('html, body').animate({
      scrollTop: $("html").offset().top
    }, 300);
  });
  $('#bottom').click(function() {
    $('html, body').animate({
      scrollTop: $(document).height()
    }, 300);
  });

  /* window size */
  var HEIGHT = $(window).height();
  var WIDTH = $(window).width();

  /* First skill page */
  var count_num1 = 90;
  var count_num2 = 90;
  var count_num3 = 50;
  var count_num4 = 35;
  var delay_time1 = 1;
  var delay_time2 = 1;
  var delay_time3 = 1;
  var delay_time4 = 1;

  /* NUM 1 */
  function start_delay() {

    for (var i = 0; i <= count_num1; i++) {
      wait1(i);
    }
    function wait1(n) {
      delay_time1 *= 1.055;
      setTimeout(function() {
        $('.counting1').html(n);
      }, 25 * delay_time1)
    }

    /* NUM 2 */
    for (var i = 0; i <= count_num2; i++) {
      wait2(i);
    }
    function wait2(n) {
      delay_time2 *= 1.055;
      setTimeout(function() {
        $('.counting2').html(n);
      }, 25 * delay_time2)
    }

    /* NUM 3 */
    for (var i = 0; i <= count_num3; i++) {
      wait3(i);
    }
    function wait3(n) {
      delay_time3 *= 1.09;
      setTimeout(function() {
        $('.counting3').html(n);
      }, 25 * delay_time3)
    }

    /* NUM 4 */
    for (var i = 0; i <= count_num4; i++) {
      wait4(i);
    }
    function wait4(n) {
      delay_time4 *= 1.14;
      setTimeout(function() {
        $('.counting4').html(n);
      }, 25 * delay_time4)
    }
  }

  /* Second skill page */
  var count_num5 = 60;
  var count_num6 = 45;
  var count_num7 = 60;
  var count_num8 = 95;
  var delay_time5 = 1;
  var delay_time6 = 1;
  var delay_time7 = 1;
  var delay_time8 = 1;

  function start_delay2() {
    /* NUM 5 */
    for (var i = 0; i <= count_num5; i++) {
      wait5(i);
    }
    function wait5(n) {
      delay_time5 *= 1.08;
      setTimeout(function() {
        $('.counting5').html(n);
      }, 25 * delay_time5)
    }
    /* NUM 6 */
    for (var i = 0; i <= count_num6; i++) {
      wait6(i);
    }
    function wait6(n) {
      delay_time6 *= 1.09;
      setTimeout(function() {
        $('.counting6').html(n);
      }, 25 * delay_time6)
    }
    /* NUM 7 */
    for (var i = 0; i <= count_num7; i++) {
      wait7(i);
    }
    function wait7(n) {
      delay_time7 *= 1.07;
      setTimeout(function() {
        $('.counting7').html(n);
      }, 25 * delay_time7)
    }
    /* NUM 8 */
    for (var i = 0; i <= count_num8; i++) {
      wait8(i);
    }
    function wait8(n) {
      delay_time8 *= 1.051;
      setTimeout(function() {
        $('.counting8').html(n);
      }, 25 * delay_time8)
    }
  }

  /* Opinion loop */
  var counter = 1;
  var opinion1 = '"Correct, accurate and dependable! He accomplished what I found out. I can only recommend! /Attila Ladocki/"';
  var opinion2 = '"He is a hard-working, disciplined professional who never misses a deadline. Working with him is a privilege." /Andor Nagl/';

  function slider() {
    if (counter <= 2) {
      setTimeout(function() {
        switch (counter) {
          case 1:
            $('.sliding_opinions').html(opinion1);
            $('.load_line').removeClass('sliding');
            $('.load_line').addClass('sliding_sec');
            break;
          default:
            $('.sliding_opinions').html(opinion2);
            $('.load_line').removeClass('sliding_sec');
            $('.load_line').addClass('sliding');
        }
        counter++;
        slider();
      }, 9000);
    } else {
      counter = 1;
      slider();
    }
  }
  /* Call slider() function */
  slider();
  $('.sliding_opinions').html(opinion2);
  $('.load_line').addClass('sliding');

  /* Light box */
  $('.image1').click(function() {
    $('.light_box_image').attr('src', 'images/img1.jpg')
    start_light_box();
  });
  $('.image2').click(function() {
    $('.light_box_image').attr('src', 'images/img2.jpg')
    start_light_box();
  });
  $('.image3').click(function() {
    $('.light_box_image').attr('src', 'images/img3.jpg')
    start_light_box();
  });
  $('.image4').click(function() {
    $('.light_box_image').attr('src', 'images/img4.jpg')
    start_light_box();
  });
  $('.image5').click(function() {
    $('.light_box_image').attr('src', 'images/img5.jpg')
    start_light_box();
  });
  $('.image6').click(function() {
    $('.light_box_image').attr('src', 'images/img6.jpg')
    start_light_box();
  });

  $('.light_box_bg, .light_box').click(function() {
    close_light_box();
  });

  function start_light_box() {
    var lb_bg = $('.light_box_bg');
    var lb = $('.light_box');
    lb_bg.css({'display':'block','position':'fixed'});
    lb.css({'display':'block','position':'fixed'});
    /*$('html, body').css({'overflow':'hidden','height':'100%'});*/
  }
  function close_light_box() {
    var lb_bg = $('.light_box_bg');
    var lb = $('.light_box');
    lb_bg.css({'display':'none','position':'absolute'});
    lb.css({'display':'none','position':'absolute'});
    /*$('html, body').css({'overflow':'auto','height':'auto'});*/
  }

  var figcaption_zoom = '<svg version="1.1" id="Capa_1" class="zoom_in" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 491.542 491.542" style="enable-background:new 0 0 491.542 491.542;" xml:space="preserve"> <g> <path class="fill_zoom" d="M311.517,14.053c-99.265,0-180.024,80.66-180.024,179.805c0,41.538,14.182,79.827,37.955,110.303L0,451.176l22.889,26.313 l170.577-147.994c31.628,27.496,72.926,44.168,118.051,44.168c99.266,0,180.025-80.661,180.025-179.805 C491.542,94.713,410.784,14.053,311.517,14.053z M311.517,353.663c-88.237,0-160.024-71.688-160.024-159.805 S223.279,34.053,311.517,34.053s160.025,71.688,160.025,159.805S399.755,353.663,311.517,353.663z"/> <polygon class="fill_zoom" points="322.447,122.812 300.587,122.812 300.587,182.928 240.471,182.928 240.471,204.788 300.587,204.788 300.587,264.904 322.447,264.904 322.447,204.788 382.563,204.788 382.563,182.928 322.447,182.928 "/> </g></svg>'

  $('figcaption').html(figcaption_zoom);

  /* copy to clipboard */
  $('#email_button').click(function() {
    copyToClipboard();

    function copyToClipboard() {
      var temp = $('<input>');
      $('body').append(temp); //append - hozzafuz
      temp.val($('#email').text()).select();
      document.execCommand('copy');
      temp.remove();
      $('.email_button').html('COPIED');
    }
  });

  /* footer social */
  $('.facebook_footer').html(facebook_icon);
  $('.instagram_footer').html(instagram_icon);
  $('.fivepx_footer').html(fivepx_icon);
  $('.github_footer').html(github_icon);

});
