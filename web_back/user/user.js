// 语义化

var user = {
    // 登录请求
    login: function(myName, myPassword, callback) {
        // console.log(1);

        $.post(userurl.userurl_login, {
            user_name: myName,
            password: myPassword
        }, function(res) {
            console.log(1);
            // 判断成功与否
            callback(res);
        })
    },
    // 退出请求
    quit: function(callback) {
        $.post(userurl.userurl_logout, function(res) {
            // console.log(1);
            callback(res);

        })
    },

    // 获取用户信息请求
    // 让gain只负责获取数据，发请求，不负责加工请求
    // 设callback为回调函数，负责加工请求
    gain: function(callback) {
        $.get(userurl.userurl_getuser, function(res) {
            console.log(res);
            // console.log(res.data.user_pic);
            // console.log($("#loginImg"));
            callback(res);

        })
    }
}