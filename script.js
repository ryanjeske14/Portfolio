function toggleHamburger() {
    let x = $('.topnav').attr('class');
    if (x === "topnav") {
      $('.topnav').addClass("responsive");
    } else {
      $('.topnav').removeClass('responsive');
    }
  }
  
  function navScroll() {
    $('a[href*="#"]').on('click', function(e){
        e.preventDefault();
  
        if ($(this).attr('href') == "#bioSection") {
           $('html, body').animate({scrollTop: $(".bioSection").offset().top - 50},700);
           $('.topnav').removeClass('responsive');
        }
       
       if ($(this).attr('href') == "#skillsSection") {
           $('html, body').animate({scrollTop: $(".skillsSection").offset().top -50},700);
           $('.topnav').removeClass('responsive');
        }
  
        if ($(this).attr('href') == "#projectsSection") {
           $('html, body').animate({scrollTop: $(".projectsSection").offset().top -50},700);
           $('.topnav').removeClass('responsive');
        }
  
        if ($(this).attr('href') == "#contactSection") {
           $("html, body").animate({scrollTop: $(document).height() - $(window).height() }, 700);
           $('.topnav').removeClass('responsive');
        }
  
        if ($(this).attr('href') == "#home") {
           $("html, body").animate({scrollTop: '0px'}, 700);
           $('.topnav').removeClass('responsive');
        }
    });
  }

  function initializeFunctions() {
    navScroll();
  }

  $(initializeFunctions)