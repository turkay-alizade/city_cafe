$(function(){
//back-to-top button

$(window).scroll(function(){
    if($(window).scrollTop()>300){
        $('.back-to-top').show()
    }else{
        $('.back-to-top').hide()
    }
});

//Menu-bar 

$('.menu-btn').on('click',function(){
  if($('.menu-btn i').hasClass('fa-bars')){
    $('.menu-btn i').removeClass('fa-bars');
    $('.menu-btn i').addClass('fa-times');
    $('.navbar-nav').fadeIn(1,function(){
      $(this).addClass("menu-active");
  })
}else{
  $('.menu-btn i').removeClass('fa-times');
  $('.menu-btn i').addClass('fa-bars');
    $('.navbar-nav').fadeIn(1,function(){
      $(this).removeClass("menu-active");
  });
}
});

$('.navbar-nav').on('click',function(){
  $(this).removeClass("menu-active");
  $('.menu-btn i').removeClass('fa-times');
  $('.menu-btn i').addClass('fa-bars');
});

$(window).scroll(function(){
  if($(window).scrollTop() > 500 && window.innerWidth > 750){
    $('nav').addClass("show");
    $('.show ul li a').css({"color":"#80CB0C"});
    $('.nav-link').css({"border":"none"});
    $('.active').css({"border":"1px dashed #80CB0C"});
  }else{
    $('nav').removeClass("show");
    $('.nav-link').css({"color":"#ffffff"});
    $('.nav-link').css({"border":"none"});
  }
});

// About section

$(window).scroll(function(){
  let about = $('#about').offset().top - window.innerHeight;
  if ($(window).scrollTop() > about) {
    $('.about-img').css({"transform": "translateX(0px)"});
    $('.about-text').css({"transform": "translateX(0px)"});
  }
});

// Services section

$(window).scroll(function(){
  let services = $('#services').offset().top - 100;
  if($(window).scrollTop()>services){
    $('.services-text-top').css({"transform":"translateY(0px)"});
    $('.services-text-bottom').css({"transform":"translateY(0px)"})
  }
});

// Menu section

$(window).scroll(function(){
  let menu = $('#menu').offset().top - 100;
  if ($(window).scrollTop() > menu) {
    $('#menu .col-lg-6:nth-child(even)').css({"transform":"translateX(0px)","opacity":"1"});
    $('#menu .col-lg-6:nth-child(odd)').css({"transform":"translateX(0px)","opacity":"1"})
  }
});

// Gallery section

$(window).scroll(function(){
  let gallery = $('#gallery').offset().top - 100;
  if ($(window).scrollTop() > gallery) {
    $('#gallery .col-lg-3:nth-child(odd) .card').css({"transform":"translateY(0px)","opacity":"1"});
    $('#gallery .col-lg-3:nth-child(even) .card').css({"transform":"translateY(0px)","opacity":"1"});
  }
});

//lightbox
$('.card').on('click',function(){
    let imageSrc = $(this).children().attr("src");
    $('.img-gallery').attr('src',imageSrc)
    $('.lightbox').fadeIn('slow'); 
});

$('.fa-times-circle').on('click',function(){
  $('.lightbox').fadeOut('slow'); 
});

//next button

$('.fa-chevron-circle-right').on('click',function(){
  $(".img-gallery").fadeOut(500,function(){
    let currentImgSrc = $(".img-gallery").attr("src");
    let currentImg = $('.card img[src="' + currentImgSrc + '"]');
    let images = $(".card img");
    let nextImg = $(currentImg.closest('.image').next().find("img"));
    if (nextImg.length > 0) { 
      $(".img-gallery").attr("src", nextImg.attr("src")).fadeIn(500);
    } else {
      $(".img-gallery").attr("src", $(images[0]).attr("src")).fadeIn(500);
    }
  })
});

//prev button

$('.fa-chevron-circle-left').on('click',function(){
  $(".img-gallery").fadeOut(500,function(){
    let currentImgSrc = $(".img-gallery").attr("src");
    let currentImg = $('.card img[src="' + currentImgSrc + '"]');
    let images = $(".card img");
    let prevImg = $(currentImg.closest('.image').prev().find("img"));
    if (prevImg.length == 0){ 
        $(".img-gallery").attr("src", $(images[7]).attr("src")).fadeIn(500);
    } 
      else {
        $(".img-gallery").attr("src", prevImg.attr("src")).fadeIn(500);
    }
  })
});
  

// Stats section

$(window).scroll(function(){
    let stats = $('#stats .row').offset().top - window.innerHeight;
    if ($(window).scrollTop()>stats){
      $('.stats').css({"transform": "scale(1)"});
        $('.counter').each(function(){
            let counter = $(this);
            let countTo = counter.attr('data-target');
            $(this).prop({ countNum: counter.text()}).animate({
                countNum: countTo
            },
            {
                duration: 8000,
                easing:'linear',
                step: function() {
                    counter.text(Math.floor(this.countNum));
                },
                complete: function() {
                    counter.text(this.countNum);
                }
            });
        });
    }
});

// Chefs section
$(window).scroll(function(){
  let chefs = $('.chefs').offset().top - window.innerHeight;
  if ($(window).scrollTop() > chefs){
    $('.chefs-img>img').css({"transform":"translateY(0px)"})
  }
});

// Feedback section
$(window).scroll(function(){
  let feedback = $('#feedback').offset().top - 100;
  if ($(window).scrollTop() > feedback){
    $('.feedback-content').css({"transform":"scale(1)"})
  }
});

// Contact section
$(window).scroll(function(){
  let contact = $('#contact').offset().top - 100;
  if ($(window).scrollTop() > contact){
    $('form').css({"transform":"translateY(0px)"})
  }
});


})