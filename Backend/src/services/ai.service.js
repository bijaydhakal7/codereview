const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function getGeminiResponse(prompt) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash" // ✅ WORKS
  });

  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = getGeminiResponse;
