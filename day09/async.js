//async.js
// XMLHttpRequest 모듈 로드
const { XMLHttpRequest } = require("xmlhttprequest");

function sendGetRequest() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

  // 응답 수신
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {      // 요청 완료
      if (xhr.status === 200) {     // 성공
        console.log("응답 데이터:", xhr.responseText);
      } else {
        console.error("에러 발생:", xhr.status);
      }
    }
  };

  xhr.send(); // 요청 전송
}

sendGetRequest();