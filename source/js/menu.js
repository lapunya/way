'use strict';

var navigation = document.querySelector('.nav');
var navButton = document.querySelector('.nav__toggle');

navigation.classList.remove('nav--nojs');
navigation.classList.add('nav--closed');

navButton.addEventListener('click', function () {
  if (navigation.classList.contains('nav--closed')) {
    navigation.classList.remove('nav--closed');
    navigation.classList.add('nav--opened');
  } else {
    navigation.classList.remove('nav--opened');
    navigation.classList.add('nav--closed');
  }
});
