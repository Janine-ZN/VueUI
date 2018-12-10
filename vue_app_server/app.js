// 1. 加载模块
const express = require("express");
const pool = require("./pool");
// 2. 创建express对象
var app = express();

// 服务器node.js允许跨域访问配置项
// 2.1 引入跨域模块
const cors = require("cors");
// 2.2 配置允许哪个程序跨域访问 脚手架
app.use(cors({
    origin:["http://127.0.0.1:8080","http://127.0.0.1:8080"],
    credentials:true
}))


// 3. 指定静态目录
// 服务器指定目录 绝对路径 出错
app.use(express.static(__dirname + "/public"));
// app.use(express.static("public"));
// 4. 绑定监听端口
app.listen(3000);

// 功能一：学子商城首页图片轮播
// GET /imagelist json
app.get("/imagelist",(req,res)=>{
    var obj = [
        {id:1,img_url:"http://127.0.0.1:3000/img/banner1.png"},
        {id:2,img_url:"http://127.0.0.1:3000/img/banner2.png"},
        {id:3,img_url:"http://127.0.0.1:3000/img/banner3.png"},
        {id:4,img_url:"http://127.0.0.1:3000/img/banner4.png"}
    ];
     res.send(obj);
})

// 功能二：分页显示：新闻分页
app.get("/newlist",(req,res)=>{
    // 1:参数 当前页码 页大小（一页显示几行数据）
    var pno =req.query.pno;             // 2
    var pageSize = req.query.pageSize;  // 5
    console.log("pno==>" + pno + "pageSize==>" + pageSize);

    // 2:sql
    // 2.1:查找总记录->转换总页数 15->3
    var sql = "SELECT count(id) as c FROM xz_news";
    
    var obj ={};        // 保存发送客户端数据
    var progress = 0;   // 进度
    
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        var c= Math.ceil(result[0].c/pageSize);
        obj.pageCount = c;
        progress +=50;
        console.log(c);
        if(progress==100){
            res.send(obj);
        }
    });
    // 2.2:查找当前内容    中间5行
    var sql = "SELECT id,title,img_url,ctime,point";
        sql += " FROM xz_news";
        sql += " LIMIT ?,?";
    var offset = parseInt((pno-1)*pageSize);        // 计算分页偏移量
    pageSize = parseInt(pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        console.log(result);
        obj.data =result;
        process +=50;
        if(progress==100){
            res.send(obj);
        }
    })
 
    // 3:结果格式
    // res.send({code:"ok"});
    
})






