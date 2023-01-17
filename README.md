# gonke
An open AI chat bot for discord I made for personal use with my friends !!! :sparkles:

## 🛠️ Setting up gonke
After you have cloned the repo, you first need to run `npm install` to install all the packages:
```bash
npm install
```
Then you need to copy `config.template.json` to a new file called `config.json` and then replace the value associated with `TOKEN` with your secret token. You can also add an [OpenAI API key](https://beta.openai.com/) to use chat bot features:
```js
{
  "TOKEN": "enter token here",   // Replace with "enter token here" with secret token!
  "CLIENT_ID": "1006310697136824460",
  "GUILD_ID": "903375428184576000",
  "OPENAI_API_KEY": "enter api key here"  // Also an OpenAI api key for chat bot features
}
```
Now gonke is ready to run~
## 🚋 Running gonke
Run the following command
```bash
npm run dev
```
If you wish to stop gonke, you can close the terminal or press `CTRL+C`.