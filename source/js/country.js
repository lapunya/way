'use strict';

var links = document.querySelectorAll('.destination__popup-link');
var countryTabs = document.querySelectorAll('.country__information');


links.forEach(function (item, index) {
  item.addEventListener('click', function () {
    var activeTab = document.querySelector('.country__information--active');

    activeTab.classList.remove('country__information--active');
    countryTabs[index].classList.add('country__information--active');
  });
});
