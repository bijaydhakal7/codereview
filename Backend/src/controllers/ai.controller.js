const { getGeminiResponse } = require("../services/ai.service");

exports.getResponse = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const reply = await getGeminiResponse(prompt);
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gemini API failed" });
  }
  
};
