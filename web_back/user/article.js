var article = {
    // 获取数据
    gain: function(urPage, type, state, callback) {
        $.get(userurl.article_search, {
                page: curPage,
                type: type,
                state: state
            },
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