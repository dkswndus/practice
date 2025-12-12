const express = require('express');
const path = require('path');

const app = express();
const port = 3003;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

// 1) 기본 라우트
app.get('/', (req, res) => {    
    res.send('Hello World!');
});

// 2) /json 라우트 → fetch로 public/student2.json 가져오기
app.get('/json', async (req, res) => {
    try {
        // fetch()는 HTTP 요청만 되므로 localhost 경로로 요청
        const response = await fetch("http://localhost:3003/student2.json");

        const data = await response.json();

        // app.ejs 로 전달
        res.render("app", { data });
        
    } catch (error) {
        console.error(error);
        res.status(500).send("오류 발생");
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
