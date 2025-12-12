const http = require('http');
const fs = require('fs');
const path = require('path'); // 파일 경로를 안전하게 다루기 위한 모듈

const server = http.createServer((req, res) => {
  // 1. 읽어올 파일의 절대 경로 생성
  // __dirname: 현재 실행 중인 파일(server.js)이 있는 폴더 경로
  const filePath = path.join(__dirname, 'img/index.html');

  // 2. 파일 읽기 (비동기 방식)
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 파일을 읽다가 에러가 발생한 경우 (예: 파일 없음)
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('서버 에러: 파일을 읽을 수 없습니다.');
      return;
    }

    // 3. 파일 읽기 성공 시 응답 전송
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data); // 읽어온 파일 내용(data)을 전송
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});