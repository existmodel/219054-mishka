      var navMain = document.querySelector('.main-nav');
      var navToggle = document.querySelector('.main-nav__toggle');

      navMain.classList.remove('main-nav--nojs');

      navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('main-nav--closed')) {
          navMain.classList.remove('main-nav--closed');
          navMain.classList.add('main-nav--opened');
        } else {
          navMain.classList.add('main-nav--closed');
          navMain.classList.remove('main-nav--opened');
        }
      });

      var popupToCardOpen = document.querySelectorAll(".js-popup-open");
      var popupToCard = document.querySelector(".popup-cart");
      var popupOverlay = document.querySelector(".pop-up-overlay");

      if (popupToCardOpen) {
        for (var i = 0; i < popupToCardOpen.length; i++) {
          popupToCardOpen[i].addEventListener("click", function (event) {
            event.preventDefault();
            popupOverlay.classList.add("popup-overlay--show");
            popupToCard.classList.add("popup-content--show");
          })
        }
      }

      if (popupToCard) {
        popupToCard.addEventListener("click", function (event) {
        var target = event.target;
        if (target.classList.contains("popup-cart__button")) {
          popupToCard.classList.remove("popup-content--show");
          popupOverlay.classList.remove("popup-overlay--show");
          }
        });
      }

      if (popupOverlay) {
        popupOverlay.addEventListener("click", function (event) {
        var target = event.target;
        if (target.classList.contains("pop-up-overlay")) {
          event.preventDefault();
          popupToCard.classList.remove("popup-content--show");
          popupOverlay.classList.remove("popup-overlay--show");
          }
        });
      }

      window.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
          if (popupToCard) {
            if (popupToCard.classList.contains("popup-content--show")) {
              popupToCard.classList.remove("popup-content--show");
              popupOverlay.classList.remove("popup-overlay--show");
            }
          }
        }
      });

      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 59.938761, lng: 30.323210},
          zoom: 17
        });
        var marker = new google.maps.Marker({
          position: {lat: 59.938761, lng: 30.323210},
          map: map,
          title: 'Mishka',
          icon: {
          url: "img/icon-map-pin.svg",
          scaledSize: new google.maps.Size(66, 100)
      }
      });
  }
