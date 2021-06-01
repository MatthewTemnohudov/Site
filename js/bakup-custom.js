// $(window).load(function(){
//   $('.flexslider').flexslider({
//   animation: "slide",
//   directionNav: false,
//   controlNav: true,
//   slideshowSpeed: 3000,
//   animationSpeed: 800,
//   });
// });

$(document).ready(function() {

  //FlexSlider
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
    slideshowSpeed: 3000,
    animationSpeed: 800,
    });

  //Mobile-Menu
	$('.header__menu-btn').on('click', function() {
		$('.header__nav').slideToggle(500);
	});

  $('.header__item').hover(function() {
    $('.tooltip', this).stop().fadeIn(500);
	}).mouseleave(function () {
    $('.tooltip', this).stop().fadeOut(500);
  });

  //d

  // $(window).on('resize', function() {

  //   if($(window).width() < 1000) {

  //      $('.mobile-sidebar').on('click', function() {
  //       $('.category .filter-wrap').fadeIn(500);

  //       $('.filter').animate({
  //         right: "0"
  //       }, 1000);
  //       $(this).slideToggle(500);
  //     });

  //     $(".filter__header-wrap-img").on('click', function () {
  //       $('.mobile-sidebar').slideToggle(500);;
  //       $('.filter').animate({
  //         right: "-300"
  //       }, 1000);
  //       $('.category .filter-wrap').fadeOut(500);
  //     });

  //     console.log("1");
  //   } else {
  //     console.log("2");
  //   }

  //   });
  $('.mobile-sidebar').on('click', function() {
    $('.category .filter-wrap').fadeIn(500);

		$('.filter').animate({
      right: "0"
    }, 1000);
    $(this).slideToggle(500);
	});

  $(".filter__header-wrap-img").on('click', function () {
    $('.mobile-sidebar').slideToggle(500);;
    $('.filter').animate({
      right: "-300"
    }, 1000);
    $('.category .filter-wrap').fadeOut(500);
  });

  //Tabs
  $('.tabs-wrapper').each(function() {
    let ths = $(this);
    ths.find('.tabs__item').not(':first').hide();
    ths.find('.tabs__btn').click(function() {
      ths.find('.tabs__btn').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.tabs__item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });

  //PopUp
  var	popup = $('.popup');
	$('.button-popupShow').on('click', function () {
		$(popup).fadeIn(500);
	});

	$('.popup__icon-close').on('click', function () {
			$(popup).fadeOut(400);
		});
  
  //CheckBox
  $('#future-order').on('click', function () {
    if ($(this).is(':checked')){
      $('.checkbox-hide').css("display", "flex");
    } else {
      $('.checkbox-hide').css("display", "none");
    }
  });

   $('#credit').on('click', function () {
    if ($(this).is(':checked')){
      $('.credit-split').css("display", "flex");
      $('.terms-of-use').css("display", "none");
      if ($('#credit-split-1').is(':checked')){
        $('#form-credit-1').css("display", "block");
      }
    }
  });

   $('#credit-split-1').on('click', function () {
    if ($(this).is(':checked')) {
      $('#form-credit-2').css("display", "none");
    }
   });

   $('#credit-split-2').on('click', function () {
    if ($(this).is(':checked')) {
      $('#form-credit-2').css("display", "block");
    }
   });

   $('#cash').on('click', function () {
      $('.credit-split').css("display", "none");
      $('#form-credit-1').css("display", "none");
      $('#form-credit-2').css("display", "none");
      $('.terms-of-use').css("display", "block");
   });

   //DropDown {
   $('.restaurant-page-2 .dropdown > ').on('click', function () {
    $(this).find('.dropdown__wrap-content').slideToggle(500);
  });

  $(".filter__dropdown-name").toggle(
    function () {
      $(this).next('.filter__dropdown-content').slideToggle(500);
        $('img', this).attr('src', './img/arrow-down-blue.svg')
    },
    function () {
      $(this).next('.filter__dropdown-content').slideToggle(500);
        $('img', this).attr('src', './img/arrow-left-blue.svg')
    }
  );

   //DatePicker
   $(function(){
    $("#datepicker").datepicker();

    $('#timepicker').timepicker({
      interval: 5,
      minTime: '7',
      maxTime: '6:00pm',
      defaultTime: '8',
      startTime: '7:00',
      dynamic: false,
      dropdown: true,
      scrollbar: true
    });
  });

  //FormStyler
  $('select').styler();
});