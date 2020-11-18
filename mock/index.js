const express = require("express");
const router = require("./router.js");

const app = express();

// 使用路由, 这里的路径会拼接上 router里面的路径
app.use("/api/", router);

// app.get("/", (req, res) => {
//   res.send("hello from express");
// });

app.listen(3456, () => console.log("server running at port 3456"));
