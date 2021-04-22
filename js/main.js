$(function () {

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    /*Если меньше 150px удаляем класс для header*/
      if (height > 150) {
      $('.header__menu-inner').addClass('header__menu-inner--fixed');
    } else {
      /*Если меньше 150px удаляем класс для header*/
      $('.header__menu-inner').removeClass('header__menu-inner--fixed');
    }


  });



  $(".menu a, .logo__footer-link").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });



  $('.slider-blog__items').slick({
    arrows: false,
    dots: true,
  });


  $('.menu__btn, .menu a').on('click', function () {
    $('.header__menu-inner').toggleClass('header__menu-inner--active');// toggleClass ---при клике к .header_top-inner добавляется класс header_top-inner--active, при повторном клике menu__list--active исчезает


  });

  var mixer = mixitup('.gallery__content');

});

