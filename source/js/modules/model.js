module.exports = function() {
    function Model() {
        this.sort = function (list, dataType, directionReverse) {
            if(dataType === 'date') {
                list.sort(function (a, b) {
                    if (a[dataType].split('/').reverse() > b[dataType].split('/').reverse()) {
                        return 1;
                    }
                    if (a[dataType].split('/').reverse() < b[dataType].split('/').reverse()) {
                        return -1;
                    }
                    return 0;
                });
            }else{
                list.sort(function (a, b) {
                    if (a[dataType] > b[dataType]) {
                        return 1;
                    }
                    if (a[dataType] < b[dataType]) {
                        return -1;
                    }
                    return 0;
                });
            }
            if (directionReverse === true)
                list.reverse();
            return list
        };
    }
    Model.prototype.give = function (list) {
        return list;
    };
    return Model;
};