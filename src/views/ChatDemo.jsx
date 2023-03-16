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
    const [result, setResult] = useState("");
    const [input, setInput] = useState("");
    
    const selectOption = (option) => {
        setOption(option)
    };
    
    const doStuff =  async () => {
        
        let object = { prompt: input, ...option };
        
        const response = await openai.createCompletion(object);
        console.log(object)

        setResult(response.data.choices[0].text);
        console.log(response)
    }
        
        
    return (
        <div>
            
            {Object.values(option).length === 0 ? (

                <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
            
                ) : (
                
                <Translation doStuff={doStuff} setInput={setInput} result={result} />
            )}
        </div>
    )
}