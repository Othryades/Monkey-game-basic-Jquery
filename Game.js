var Game;
$(document).ready(function () {
    Game = {
        /**
         * array of object players
         */
        players: [],

        /**
         * create an new object of type Player
         * insert the object in player array
         * @param name
         */
        insertPlayer: function (name) {
            this.players.push(new Player(name));
        },

        /**
         *bind click to add-player
         * create var playerName and binding the value of the input
         * validation : verify if playerName is true
         * create var li that contains string HTML
         * insert var li in DOM
         * call input and reset to empty
         * call method insertPlayer of Game
         */
        addPlayer : function () {
            $("button.add-player").on("click", function () {
                var playerName = $("input[name=player-name]").val();
                if (playerName) {
                    var li = "<li>" + playerName + "</li>";
                    $(".player-list ul").append(li);
                    $("input[name=player-name]").val("");
                    Game.insertPlayer(playerName);
                } else {
                    alert("input field empty!")
                }
            });

        },

        /**
         *bind click
         *bind click
         */
        bindEvent: function () {
            $("button.start-game").on("click", this.addPlayer);
            $("button.start-game").on("click", function() {
                $("#game").html("<h1>Game started</h1>");
            });
        }

    };

    /**
     * call method bindEvent of object Game
     */
   Game.bindEvent();

});