/*map*/
require('./modules/map')();

/*table*/
/*model*/
var Model = require('./modules/model')();
/*view*/
var View = require('./modules/view')();
/*controller*/
var Controller = require('./modules/controller')();

// /*entry*/
// require('./modules/entry')();

/*sharepoint*/
require('./modules/sharepoint')();





(function () {
    var model = new Model();
// console.log(model.get());

    var list = [
        { request: 'Praesent felis ', date: '1/03/2015', status: "Rejected" },
        { request: 'Felis nibh, faucibus', date: '2/04/2014', status: "Resolve" },
        { request: 'Nibh, faucibus et interdum ut', date: '3/06/2016', status: "Rejected" },
        { request: 'bim', date: '4/01/2012', status: "Resolve" }
    ];

    var view = new View();
    console.log(view.render(list));

    var controller = new Controller(model, view);
    // console.log(controller.view.render);
    // console.log(controller.view.render);
})();