var Board = {
    tasks: [],

    addTaskToArray: function(task) {
        this.tasks.push(task);
    },

    createTask: function () {
        var title = $(input[name=title]).val();
        var description = $(input[name=description]).val();
        var time = $(input[name=time]).val();

        return new Task(title, description, time);
    },

    clearForm: function () {
        $.each( '.form input', function( key, input ) {
            $(input).val('');
        });
    },

    addTaskToBoard: function ( task ) {
        var taskHTML = task.buildHTML();
        $("#tasks").append(taskHTML);
    },

    saveTask: function () {
        var task = this.createTask();
        this.addTaskToArray(task);
        this.addTaskToBoard(task);
        this.clearForm();
    },

    removeTask: function () {

    },

    bindEvents: function () {
        // Save
        $(".form button").on('click', $.proxy(this.saveTask, this) );
        // Remove task
        $(".task .remove").on('click', $.proxy(this.removeTask, this));
    },

    init: function () {
        this.bindEvents();
    }
};

Board.init();