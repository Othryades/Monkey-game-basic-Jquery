function Task( title, description, time ) {
    this.title = title;
    this.description = description;
    this.time = time;
}

Task.prototype = {
    buildHTML: function() {
        var html = "";
        html +=
        '<div class="task">' +
        '   <h2>' + this.title + '</h2>' +
        '   <p>' + this.description + '</p>' +
        '   <time>' + this.time + '</time>' +
        '   <span class="remove">X</span>' +
        '</div>';

        return html;
    }
};

