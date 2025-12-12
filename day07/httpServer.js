

 /*
//클라이언트 요청시 응답 처리 방법
const server = http.createServer((req, res) => {
    res.statusCode = 200; //응답 코드: 200(성공)
    res.setHeader('Content-Type', 'text/html; charset=utf-8'); //응답 헤더 설정
    res.end('<h1> 노드 js로 구현 </h1>\n'); //응답 본문 설정 및 응답 종료

 });


//웹 서버 구동 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//req: 클라이언트 요청 정보
//res: 서버 응답 정보

*/
const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
//동기식 파일 열기
/*const data = fs.readFileSync('./index.html'); 
const string = data.toString();
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8'); 
    res.end(string); 
}); */

//비동기식 파일 열기
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');             
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.statusCode = 500; 
            res.end('Error loading index.html');
        } else {
            res.end(data); 
        }
    })
});
    
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});