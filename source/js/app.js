(function() {
  'use strict';

  var menuBlogOpen = (function () {
    $('.header__share-point').on('click', function(){
      if ($('.header__share-point').hasClass('header__share-point--transform')) {
        $('.header__share-point').removeClass('header__share-point--transform');
        return
      } else {
        $('.header__share-point').addClass('header__share-point--transform');
      }
    });
  })();
})();