/*map*/
require('./modules/map')();

/*table*/
/*model*/
var Model = require('./modules/model')();
/*view*/
var View = require('./modules/view')();
/*controller*/
var Controller = require('./modules/controller')();

/*sharepoint*/
require('./modules/sharepoint')();


(function () {
    var model = new Model();
    // console.log(model.get());

    var list = [
        { request: 'Braesent felis ', date: '1/03/2015', status: "Rejected" },
        { request: 'Zelis nibh, faucibus', date: '2/04/2014', status: "Resolve" },
        { request: 'Fibh, faucibus et interdum ut', date: '3/06/2016', status: "Rejected" },
        { request: 'Aim', date: '4/01/2012', status: "Resolve" }
    ];

    var view = new View();

    var controller = new Controller(model, view);
    controller.render(model.sort(list, 'date', false));
    // controller.render(model.sort(list, 'request', false));
    // controller.render(model.sort(list, 'request', false));
    // controller.render(model.sort(list, 'status', true));


    var tableHead = document.querySelector('.table__header').querySelectorAll('div');
    var directCurrent = false;
    for( var i = 0; i < tableHead.length; i++){
        tableHead[i].getAttribute('data-description');
        tableHead[i].addEventListener("click", function () {
            controller.render(model.sort(list, this.getAttribute('data-description'), directCurrent));
            directCurrent = directCurrent ? false : true;
            for( var i = 0; i < tableHead.length; i++){
                tableHead[i].classList.remove('table-header__sort-down')
            }
            this.classList.add('table-header__sort-down');
            if(directCurrent) {
                this.classList.add('table-header__sort-up');
            }else {
                this.classList.remove('table-header__sort-up');
            }
        })
    }
})();