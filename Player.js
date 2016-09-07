var Player = function( name ){
    this.name = name;
    this.score = 0;
};

Player.prototype = {
    printPlayerInfo: function(){
        console.log("player " + this.name + " have " + this.score + "points and is " + this.age + " old")
    },

    addPoint: function () {
        this.name += 1;
    },

    removePoint: function () {
        this.name -= 1;
    }
};