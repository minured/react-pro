const express = require("express");
const router = express();

// 定义服务器的响应路由
router.get("/home",(req, res)=>{
    res.send("/  首页")
})

module.exports = router;
