const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ Best & stable model
const MODEL_NAME = "gemini-pro";

async function getGeminiResponse(prompt) {
  const model = genAI.getGenerativeModel({
    model: MODEL_NAME,
  });

  const result = await model.generateContent(prompt);
  return result.response.text();

  
}

module.exports = { getGeminiResponse };
