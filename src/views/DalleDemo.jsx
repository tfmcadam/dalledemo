import "./DalleDemo.css"
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
    const [style, setStyle] = useState(false)

    const changeStyle = () => {
            setStyle(!style)
    }

    const imageSize = style ? "image-big" : "image";

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {

            generateImage();
        }
    }

    const generateImage = async () => {
        setIsLoading(true)
        setImageUrl("")
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
                    isLoading && <LoadingSpinner />
                }
                {
                    imageUrl

                        ? (

                            <button className="img-btn" onClick={changeStyle}><img className={imageSize} src={imageUrl} alt="ai thing" /></button>

                        ) :

                        <p></p>
                }
            </div>

            <div className='flex'>
                <textarea className=". textarea dalle-text width margin-bottom" rows="4" col="200" onChange={(e) => setUserPrompt(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder='Add your image idea here...'></textarea>
            </div>
            <button className='btn' onClick={() => generateImage()}>Generate</button>

        </div>
    );
}

