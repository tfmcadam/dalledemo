import React from "react";
import "../views/ChatDemo.css"


export default function Translation({doStuff, setInput, result, placeHolder, imageUrl}) {
    return (
        <div className="flex-text">
            <h1>{placeHolder.name}</h1>
            {
                imageUrl

                    ? (

                        <button className="img-btn"><img className="imageChat" src={imageUrl} alt="ChatImage" /></button>

                    ) :

                    <p></p>
            }
            <h3 className="result-text">{result.length > 0 ? (

                result

            ) : (

                "I have No response until you ask, but be careful what you ask for!"

            )}</h3>
            
            <textarea className="text-area" 
            cols={20} rows={5}
            placeholder={placeHolder.description} 
            onChange={(e) => setInput(e.target.value)}
            
            ></textarea>

            <div>
                <button className="action-btn" onClick={doStuff} >Let's Go!</button>
            </div>
        </div>
    )
}