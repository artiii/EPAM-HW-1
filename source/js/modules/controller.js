module.exports = function(){
    function Controller(model, view) {
        this.view = view;
        this.model = model;
    }
    Controller.prototype.render = function (list) {
        this.view.render(list);
    };
    return Controller;
};