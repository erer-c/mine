var article = {
    // 获取数据
    gain: function(curPage, type, state, callback) {
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
            // console.log(res);
            callback(res);
        })
    },
    publish: function(fd, callback) {
        $.ajax({
            url: userurl.article_add,
            type: "post",
            data: fd,
            processData: false, //不要jQuery处理formdata数据
            contentType: false, //不要使用默认请求头
            success: function(res) {
                callback(res);
            }
        })
    },

    // 编辑
    edit: function(fd, callback) {
        $.ajax({
            url: userurl.article_edit,
            type: "post",
            data: fd,
            processData: false, //不要jQuery处理formdata数据
            contentType: false, //不要使用默认请求头
            success: function(res) {
                callback(res);
            }
        })
    },

    // 获取文章详情
    detail: function(id, callback) {
        $.get(userurl.article_search, { 'id': id }, function(res) {
            callback(res);
        })
    }


}