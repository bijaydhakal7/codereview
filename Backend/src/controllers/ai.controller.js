const aiService = require("../services/ai.service");

module.exports.getResponse = async (req, res) => {
  try {
    const { prompt } = req.query;

    if (!prompt) {
      return res.status(400).json({
        error: "Prompt query parameter is required",
      });
    }

    const response = await aiService(prompt);

    res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "AI response failed",
    });
  }

};
