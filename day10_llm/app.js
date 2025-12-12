// app.js
require("dotenv").config();
const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
    const response = await client.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
            { role: "user", content: "ai 개발자에 대해서 어떻게 생각해?" }
        ],
    });
    console.log(response)
    console.log(response.choices[0].message.content);
    
}

main();
