module.exports = function() {
    'use strict';
    var menuOpen = (function () {
        var headerSharepoint = document.querySelectorAll('.header__share-point');
        headerSharepoint[0].addEventListener('click', function () {
            if(headerSharepoint[0].classList.contains('header__share-point--transform')) {
                headerSharepoint[0].classList.remove('header__share-point--transform');
            } else {
                headerSharepoint[0].classList.add('header__share-point--transform');
            }
        })
    }());
};
