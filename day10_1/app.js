const express = require('express');
const path = require('path');

const app = express();
const port = 3003;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



// 1) 기본 라우트
app.get('/', (req, res) => {    
    res.send('Hello World!');
});


app.get('/movies', async (req, res) => {
    try {

        const response = await fetch("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=a79844cee7d03c461be229f08722a701&targetDt=20251201&repNationCd=K&itemPerPage=5");

        const data = await response.json();

        res.render("movies", { data });
        console.log(data);
        
    } catch (error) {
        console.error(error);
        res.status(500).send("오류 발생");
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    
});
