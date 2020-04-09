'use strict';

var links = document.querySelectorAll('.destination__popup-link');
var countryLabeles = document.querySelectorAll('.country__item');
var countryTabs = document.querySelectorAll('.country__information');


links.forEach(function (item, index) {
  item.addEventListener('click', function () {
    var activeLabel = document.querySelector('.country__item--active');
    var activeTab = document.querySelector('.country__information--active');

    activeLabel.classList.remove('country__item--active');
    countryLabeles[index].classList.add('country__item--active');

    activeTab.classList.remove('country__information--active');
    countryTabs[index].classList.add('country__information--active');
  });
});
