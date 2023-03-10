
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useState } from 'react';
const { Configuration, OpenAIApi, } = require("openai")
const configuaration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
});
    
const openai = new OpenAIApi(configuaration);

export const DalleDemo = () => {

    const [userPrompt, setUserPrompt] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const generateImage = async () => {
        setIsLoading(true)
        const imageParameters = {
            prompt: userPrompt,
            n: 1,
            size: "1024x1024",
        }
        const response = await openai.createImage(imageParameters);
        const urlData = response.data.data[0].url
        console.log(urlData);
        setImageUrl(urlData);
        setIsLoading(false);
    }
    return (
        <div className="App">
            
            <h1 className='heading'>Dall-E II Demo</h1>
            <p className='margin-bottom'>Get creative and see what you get!</p>
            <div className='shadowBox'>
                {
                isLoading && <LoadingSpinner/>
                }
                {
                    imageUrl
                    
                    ? <img className="image" src={imageUrl} alt="ai thing" />
                    : 
                        <p></p>
                }

                
            </div>
            <div className='flex'>
                {/* <input
        placeholder='Crystal sitting in a chair, looking at her phone'
        onChange={(e) => setUserPrompt(e.target.value)}
        /> */}
                <textarea className=". textarea dalle-text width margin-bottom" rows="4" col="200" onChange={(e) => setUserPrompt(e.target.value)}
                    placeholder='Add your image idea here...'></textarea>
            </div>
            <button className='btn' onClick={() => generateImage()}>Generate</button>
            
        </div>
    );
}

