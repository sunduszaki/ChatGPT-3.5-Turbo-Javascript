const API_KEY = require("./config")
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: API_KEY,
});
const openai = new OpenAIApi(configuration);
const chatGPT = async (prompt) => {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
    });
    console.log(response["data"]["choices"][0]["message"]["content"]);
};

chatGPT("How to make a server in node.js using express.js?")