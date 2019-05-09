var ViewModel = function () {
    var me = this;

    var item = function () {
        var self = this;

        self.Name = ko.observable(document.getElementById("name").value);
        self.Description = ko.observable(document.getElementById("desc").value);
        self.Completed = ko.observable(false);
    };

    me.delete = function (item) {
        me.itemList.remove(item);
    };

    me.itemList = ko.observableArray();

    me.addItem = function () {
        me.itemList.push(new item());
        document.getElementById("name").value = "";
        document.getElementById("desc").value = "";
    };
};

$(document).ready(function () {
    var vm = new ViewModel();
    ko.applyBindings(vm, document.getElementById("main-content"));
});