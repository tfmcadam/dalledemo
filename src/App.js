import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const { Configuration, OpenAIApi, } = require("openai")
const configuaration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuaration);

function App() {
  const [userPrompt, setUserPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const generateImage = async () => {
    const imageParameters = {
      prompt: userPrompt,
      n: 1,
      size: "1024x1024",
    }
    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url
    console.log(urlData);
    setImageUrl(urlData);
  }
  return (
    <div className="App">
      <h1>Generate a unique image With Dall-E based on what you want to See</h1>
      <p>Get creative and see what you get!</p>
      <div className='shadowBox'>
        {
          imageUrl
            ? <img className="image" src={imageUrl} alt="ai thing" />
            : <img src={logo} className="App-logo" alt="logo" />
        }
      </div>
      <div className='flex'>
        <input
          placeholder='Crystal sitting in a chair, looking at her phone'
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <button className='btn' onClick={() => generateImage()}>Generate</button>
      </div>
    </div>
  );
}

export default App;
