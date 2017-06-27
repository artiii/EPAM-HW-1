module.exports = function() {
    function Model() {
        this.list = [
            {request: 'Praesent felis ', date: '1/03/2015', status: "Rejected"},
            {request: 'Felis nibh, faucibus', date: '2/04/2014', status: "Resolve"},
            {request: 'Nibh, faucibus et interdum ut', date: '3/06/2016', status: "Rejected"},
            {request: 'Nibh, faucibus et interdum ut', date: '22/06/2016', status: "Rejected"},
            {request: 'Nibh, faucibus et interdum ut', date: '10/06/2016', status: "Rejected"},
            {request: 'Nibh, faucibus et interdum ut', date: '5/06/2016', status: "Rejected"},
            {request: 'bim', date: '4/01/2012', status: "Resolve"}
        ];
        Model.prototype.get = function () {
            return this.list;
        };
    }
    return Model;
};