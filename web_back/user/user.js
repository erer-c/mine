// 语义化
var url = "http://localhost:8000";
var user = {
    // 登录请求
    login: function(myName, myPassword) {

        $.post(url + "/admin/login", {
            user_name: myName,
            password: myPassword
        }, function(res) {
            console.log(res);
            // 判断成功与否
            if (res.code === 400) {
                $('#modalinfo').text(res.msg)
                $('.modal').modal('show')
            } else {
                window.location.href = "./index.html"
            }
        })
    },
    // 退出请求
    quit: function() {
        $.post(url + '/admin/logout', function(res) {
            console.log(1);

            if (res.code === 200) {
                window.location.href = "./login.html";

            }
        })
    },

    // 获取用户信息请求
    gain: function() {
        $.get(url + "/admin/getuser", function(res) {
            console.log(res)
                // console.log(res.data.user_pic);
            console.log($("#loginImg"));


            if (res.code === 200) {
                $("#loginName").text(res.data.nickname);
                $("#loginImg").prop('src', res.data.user_pic);
            }
        })
    }
}