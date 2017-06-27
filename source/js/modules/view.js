module.exports = function View() {
    function View () {
    }

    View.prototype.render = function (list) {
        var table = document.querySelector(".table");
        for (var i = 0; i < list.length; ++i){
            var tableItem = document.createElement('tableItem');
            tableItem.className = 'table-body__item';
            tableItem.innerHTML = `<div class="table-body__request">${list[i].request}</div><div class="table-body__date">${list[i].date}</div><div class="table-body__status"><div class="table-status__indicator table-status__indicator--${(list[i].status).toLowerCase()}">${list[i].status}</div>`
            table.appendChild(tableItem)
        }
    };
    return View;
};
