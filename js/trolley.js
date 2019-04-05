$.ajax({
    type : "post",//向后台请求的方式，有post，get两种方法
    url :  "/user/shop",//url填写的是请求的路径
    cache : false,//缓存是否打开
    data : {//请求的数据，
        "bookname" :#bookname,
        "bookprice" : #bookprice
    },
    dataType : "json",//请求的数据类型
    success : function(data) {//请求的返回成功的方法
        if (data && data.success) {
            alert("已经删除成功。");
            postData();
        } else {
            alert("删除失败，原因：" + data.msg);
        }
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {//请求的失败的返回的方法
        alert("删除失败，请稍后再次尝试删除！");
    }
});
