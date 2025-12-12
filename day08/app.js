const express = require('express');
const { getLatestPosts } = require('./dbtest'); // dbtest.js에서 가져오기
const app = express();

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  getLatestPosts(3, (err, results) => {
    if (err) return res.send('DB 조회 중 오류 발생');
    res.render('app', { boardList: results });
  });
});

app.listen(3000, () => {
  console.log('서버 실행: http://localhost:3000');
});
