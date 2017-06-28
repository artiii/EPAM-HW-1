module.exports = function(){
    function Controller(model, view) {
        // var self = this;
        this.view = view;
        this.model = model;
        // this.view.render(this.model.give());
    }
    Controller.prototype.render = function (list) {
        this.view.render(list);
    };
    return Controller;
};