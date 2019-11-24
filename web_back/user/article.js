var article = {
    // 获取数据
    gain: function(callback) {
        $.get(userurl.article_search,
            function(res) {
                // console.log(res);
                callback(res);
            })
    },

    // 删除数据
    delete: function(id, callback) {
        $.get(userurl.article_delete, { id: id }, function(res) {
            console.log(res);
            callback(res);
        })
    },

}