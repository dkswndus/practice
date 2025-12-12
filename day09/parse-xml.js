// parse-xml.js
const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

// 1. XML 파일 경로 설정
const xmlFilePath = path.join(__dirname, 'test.xml');

// 2. XML 파일 읽기
fs.readFile(xmlFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('XML 파일을 읽는 도중 오류 발생:', err);
    return;
  }

  // 3. xml2js 파서 생성 (옵션: tagName 유지 등)
  const parser = new xml2js.Parser({
    explicitArray: false, // 같은 태그가 여러 개 있을 때만 배열로 처리
    trim: true,           // 양쪽 공백 제거
  });

  // 4. XML → JS 객체로 파싱
  parser.parseString(data, (parseErr, result) => {
    if (parseErr) {
      console.error('XML 파싱 중 오류 발생:', parseErr);
      return;
    }

    // result 구조 확인
    console.log('원본 파싱 결과(JS 객체):');
    console.dir(result, { depth: null });

    // 5. 우리가 다루기 쉬운 형태로 변환
    const 학생정보 = result.학생정보;
    let 학생들 = 학생정보.학생;

    // 학생이 1명일 때는 객체, 여러 명일 때는 배열이 될 수 있으므로 통일
    if (!Array.isArray(학생들)) {
      학생들 = [학생들];
    }

    const students = 학생들.map(s => ({
      id: s.$?.id || null,                     // 속성은 $ 안에 들어감
      이름: s.이름 || null,
      나이: s.나이 || null,                   // <나이/> 일 경우 undefined → null 처리 가능
      전공: s.전공 || null,
    }));

    console.log('\n가공된 학생 리스트(JS 객체):');
    console.log(students);

    // 6. JSON 문자열로 변환
    const jsonString = JSON.stringify(students, null, 2);
    console.log('\nJSON 형태:');
    console.log(jsonString);

  });
});