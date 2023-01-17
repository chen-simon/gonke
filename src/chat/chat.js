const { Configuration, OpenAIApi } = require("openai");
const { OPENAI_API_KEY } = require("../../config.json");

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getHeader = () => {
  const desc = "This is a monke clan discord conversation between smonke, zonke, honke, and gonke. Gonke is clever, casual, hip, funny chatbot. We are in Toronto, Ontario.";
  const today = new Date()
  return `${desc} It is ${today.toLocaleString('en-US', { timeZone: 'America/New_York' })}.\n\n`;
}

const main = async messages => {
  console.log(getHeader() + messages);

  return await openai.createCompletion({
    model: "text-curie-001",
    prompt: getHeader() + messages + "gonke:",
    temperature: 0.95,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    stop: ["smonke:", "zonke:", "honke:", "gonke:"],
  })
};

module.exports = {
  "chat": main
}
