var myObject = {
    alertMessage: function ( msg ) {
        alert(msg);
    },

    buttonAction: function () {
        var val = $("input").val();
        this.alertMessage( val );
        $("button").fadeOut();
    },

    bindEvent: function () {
        $("button").on("click", $.proxy(this.buttonAction, this));
    },

    init: function () {
        this.bindEvent();
    }
};

myObject.init();