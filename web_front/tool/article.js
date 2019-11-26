var article = {
    focus: function(callback) {
        $.get(userurls.article_show, {
                perpage: 5,
                state: '已发布'
            },
            function(result) {
                // console.log(res);
                callback(result);

            })

    },
    // 获取文章的详情
    getDetail: function(id, callback) {
        $.get(userurls.article_show, {
                "id": id
            },
            function(res) {
                // callback(res)
            }
        )
    }
}