
    const navigation = document.querySelector(".primary-navigation");

    const navigationHeight = navigation.offsetHeight;

    document.documentElement.style.setProperty(
      "--scroll-padding",
      navigationHeight + "px"
    );
    $('.navbar-collapse a').click(function () {
      $(".navbar-collapse").collapse('hide');
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.vv').addClass('vv2 shadow-sm');
      } else {
        $('.vv').removeClass('vv2 shadow-sm');
      }
    });
    /* Code for changing active
          link on clicking */
    var btns =
      $(".navbar-nav .nav-link");

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click",
        function () {
          var current = document
            .getElementsByClassName("active");

          current[0].className = current[0]
            .className.replace(" active", "");

          this.className += " active";
        });
    }

    /* Code for changing active
    link on Scrolling */
    $(window).scroll(function () {
      var distance = $(window).scrollTop();
      $('.page-section').each(function (i) {

        if ($(this).position().top
          <= distance + 250) {

          $('a.nav-link.active')
            .removeClass('active');

          $('a.nav-link').eq(i)
            .addClass('active');
        }
      });
    }).scroll();
    $('.imageGallery1 a').simpleLightbox();

 
  