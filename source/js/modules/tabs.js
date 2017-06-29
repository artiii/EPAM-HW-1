module.exports = function () {
    var tabs= (function () {
        var init = function () {
                _setListeners();
            },
            _setListeners = function () {
                var tabs = document.querySelectorAll('[data-tab]');
                for(var i = 0; i < tabs.length ; i++) {
                    tabs[i].addEventListener('click', function (e) {
                        _addClass(e);
                        renderTable(e);
                    });
                }
            },
            _clearTabs = function () {
                var tabs = document.querySelectorAll('[data-tab]');
                for(var i = 0; i < tabs.length ; i++) {
                    tabs[i].classList.remove('table__tab--active');
                }
            },
            _addClass = function (e) {
                _clearTabs();
                e.target.classList.add('table__tab--active');
            },
            renderTable = function (e) {
            };

        return {

            renderTable: renderTable,
            init: init
        }
    }());
    return tabs;
};

