var main = new Vue({
    el: '#main-content',
    data: {
        nameColumn: 'Task Name',
        descColumn: 'Decription',
        doneColumn: 'Done',

        currentName: '',
        currentDesc: '',

        tasks: []
    },
    methods: {
        addItem: function () {
            var model = {
                Name: this.currentName,
                Description: this.currentDesc,
                Checked: false
            };
            this.tasks.push(model);
        },
        removeItem: function (key, element) {
            this.tasks.splice(key, 1);
        }
    }
});