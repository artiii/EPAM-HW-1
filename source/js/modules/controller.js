module.exports = function(){
    function Controller(model, view) {
        var self = this;
        this.view = view;
        this.model = model;
        this.view.render(this.model.get());
    }
    // Model.prototype.get = function () {
    //     return this.list;
    // };
    return Controller;
};