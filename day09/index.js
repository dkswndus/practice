const fs = require("fs");
const path = require("path");
const xml2js = require('xml2js');

// 1. XML 파일 경로 설정
const xmlFilePath = path.join(__dirname, 'test.xml');

// 2. XML 파일 읽기
fs.readFile(xmlFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('XML 파일을 읽는 도중 오류 발생:', err);
        return;
       
    }
    console.log(data);
    //3. XML 파싱
    
});
