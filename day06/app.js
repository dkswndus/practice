// express 불러오기
const express = require("express");
const app = express();

// 기본 라우트: http://localhost:3000 접속 시 "Hello World!" 출력
app.get("/", (req, res) => {
  res.send("안녕");
});

// 서버 실행
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
