import './ChatDemo.css'
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from '../components/OptionSelection';
import Translation from '../components/Translation';
import { arrayItems } from '../AiOptions';
import { useState } from 'react';


export function ChatDemo(){
    
    const configuaration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY,
    });
    const openai = new OpenAIApi(configuaration)

    const [option, setOption] = useState({});
    const [imageUrl, setImageUrl] = useState("")
    const [result, setResult] = useState("");
    const [input, setInput] = useState("");
    const [placeHolder, setPlaceHolder] = useState("")
    
    const selectOption = (option) => {
        setOption(option)
    };
    const generatePlaceHolder = (placeHolder) => {
        setPlaceHolder(placeHolder)
    }
    
    const doStuff =  async () => {
        let preprompt = placeHolder
        let object = { prompt: preprompt + input, ...option };
        
        const response = await openai.createCompletion(object);
        console.log(object)

        setResult(response.data.choices[0].text);
        console.log(response)

        const imageParameters =  {
            prompt: response.data.choices[0].text,
            n: 1,
            size: "1024x1024",
        }

        const imageResponse = await openai.createImage(imageParameters);
        const urlData = imageResponse.data.data[0].url
        console.log(urlData);
        setImageUrl(urlData);
    }
        
        
    return (
        <div>
            {Object.values(option).length === 0 ? (

                <OptionSelection arrayItems={arrayItems} selectOption={selectOption} generatePlaceHolder={generatePlaceHolder} />
            
                ) : (
                
                <Translation 
                doStuff={doStuff} 
                setInput={setInput} 
                result={result} 
                placeHolder={placeHolder} 
                imageUrl={imageUrl} 
                />

            )}
        </div>
    )
}