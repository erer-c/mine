var category = {
    // 获取并展示数据
    gain: function(callback) {
        $.get(userurl.category_search, function(res) {
            // console.log(res);
            callback(res)
        })
    },

    // 添加数据
    add: function(name, slug, callback) {
        $.post(userurl.category_add, { "name": name, "slug": slug }, function(res) {
            console.log(1);
            callback(res);

        })
    },

    // 编辑数据
    edit: function(id, name, slug, callback) {
        $.post(userurl.category_edit, { "id": id, "name": name, "slug": slug }, function(res) {
            console.log(res);

            callback(res);

        })
    },


    // 删除数据
    delete: function(id, callback) {
        $.post(userurl.category_delete, { "id": id }, function(res) {
            console.log(res);

            callback(res);

        })
    },


}