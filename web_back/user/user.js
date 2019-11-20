// 语义化
var url = "http://localhost:8000";
var user = {
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
    quit: function() {
        $.post(url + '/admin/logout', function(res) {
            console.log(1);

            if (res.code === 200) {
                window.location.href = "./login.html";

            }
        })
    }
}