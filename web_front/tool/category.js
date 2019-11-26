var category = {
    show: function(callback) {
        $.get(userurls.category_show, function(res) {
            console.log(res);
            callback(res);

        })
    }
}