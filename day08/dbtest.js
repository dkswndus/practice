// dbtest.js
const mysql = require('mysql2');

// 연결 객체 생성
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '6988',
  database: 'mydb',
  port: 3306
});

// 연결 시도
connection.connect(err => {
  if (err) {
    console.error('DB 연결 실패:', err.stack);
    return;
  }
  console.log('MySQL 연결 성공!');
});

// DB 쿼리 함수
function getLatestPosts(limit = 3, callback) {
  const sql = 'SELECT * FROM myboard ORDER BY id DESC LIMIT ?';
  connection.query(sql, [limit], (err, results) => {
    callback(err, results);
  });
}

// 모듈 내보내기
module.exports = {
  connection,
  getLatestPosts
};
