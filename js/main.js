
alert('Сайт ещё в разработке, ' +
  'по вопросам ремонта ' +
  'или запчастей, можете обратиться по контактам на сайте.');

// swiper-------------------------------------------------------------------------------
const swiper = new Swiper('.swiper', {
  loop: true,
  breakpoints: {
    1025: {
      slidesPerView: 8,
      spaceBetween: 20
    },
    500: {
      slidesPerView: 6,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 4,
      spaceBetween: 10
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 2000,
  },
});

//Inputmask---------------------------------------------------------------------------

const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

//JustValidate------------------------------------------------------------------------

const validate = new window.JustValidate('#form', {
  errorLabelStyle: {
    color: 'red',
  },
});

validate.addField('#name', [
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Имя не может быть менее 2х символов',
  },
  {
    rule: 'maxLength',
    value: 30,
  },
  {
    rule: 'required',
    errorMessage: 'Вы не ввели имя',
  },
])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'не менее 10-ти цифр',
    },
  ]);

// yandex-map----------------------------------------------------------------------

ymaps.ready(init);

function init(){

  const myMap = new ymaps.Map("map", {
    center: [56.33101656067623,43.917794978504084, 56.32962032942189,43.91264513719548],
    zoom: 18
  });

  const myPlacemark = new ymaps.Placemark([56.33101656067623,43.917794978504084, 56.32962032942189,43.91264513719548], {}, {
    iconLayout: 'default#image',
  });

  myMap.geoObjects.add(myPlacemark);
}

//burger---------------------------------------------------------------------------

const burger = document.querySelector('.burger'),
      header = document.querySelector('.header'),
      headerBurger = document.querySelector('.header__burger'),
      headerNav = document.querySelector('.header__nav');

      burger.addEventListener('click', function () {
        header.classList.toggle('header-active');
        headerNav.classList.toggle('open');
        headerBurger.classList.toggle('burger-line_close-menu');
      })


$(document).ready(function() {
  $("a.header__link").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
});

