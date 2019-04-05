document.getElementById("btn1").onclick=function() {
    var username = document.getElementsByClassName('login-content-input')[0].value;
    var password = document.getElementsByClassName('login-content-input')[1].value;

    var dataStr = "username=" + username + "&password=" + password;
   // response.setHeader("Access-Control-Allow-Origin", "*");

    /*$.ajax({

        type: "POST",    //请求方式（默认GET） GET或POST，仅部分浏览器支持PUT和DELETE

        url: "http://118.24.143.114:8080/web/login1",     //发送请求的地址，默认为当前页面地址
        // data:"name=John&location=Boston",  //发送到服务器的数据，必须为key/value类型（数组会被转换）

        cache: true,     //设置缓存。默认值为true，当dataType为script时，默认为false。

        timeout: 20000,  //设置请求超时时间（毫秒）
        async: false,
        data: {
            username:username,
            password:password,
        },

        dataType: "text",   //需要服务器返回的数据，可用值:xml,html,script,json,jsonp,text

        // contentType:"application/json"  //发送信息至服务器时内容编码类型。默认为application/x-www-form-urlencoded

        ifModified: "true",    //仅在服务器数据改变时获取新数据，默认值为false。

        global: "false",     //是否触发全局Ajax事件，默认值为true

        beforeSend: function (request) {
            // 禁用按钮防止重复提交
            document.getElementById("btn1").setAttribute("disabled", "disabled");
        }, //参数为XMLHttpRequest对象，发送前可以修改XMLHttpRequest,如果返回false可取消本次请求。

        success: function (data) {
            console.log("success方法执行了，服务器回复的数据为：" + data);
            alert("123")
        },
        //成功回调函数，函数的参数由服务器返回

        complete: function () {
            //取消对提交按钮的禁止
            document.getElementById("btn1").removeAttribute("disabled");
        },          //请求完成回调函数，（成功失败均调用）

        error: function (data) {
            console.log("error方法执行了，失败的信息为：" + data);
        },         //请求失败时调用函数。该函数三个对象，XMDHttpRequest，错误信息（可选），捕获的错误对象，错误信息可有null，timeout，error，notmodified和parsererror

        dataFilter: function (data, dataType) {

        },   //给Ajax返回的原始数据进行预处理的函数。返回值由jquery进一步处理

    })
};*/

    $.ajax({
        url: "http://118.24.143.114:8080/web/login1",
        type: "POST",
        data: {
            id:'123',
            pass:'1',

        },
        async: false,//默认为true，代表异步请求；如果为false，代表同步请求
        dataType: "text",//预期服务器返回的数据类型为 json
        success: function (resultJson) {
            console.log("error方法执行了，失败的信息为：" + data);
            alert("a");
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        },
    });
    var a=0;
};


