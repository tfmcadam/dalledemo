import React from "react";

export default function Translation({doStuff, setInput, result}) {
    return (
        <div className="flex-text">
            <textarea className="text-area" 
            cols={30} rows={10} 
            onChange={(e) => setInput(e.target.value)}
            ></textarea>
            <div>
                <button className="action-btn" onClick={doStuff} >Let's Go!</button>
            </div>
            
            
            <h3 className="result-text">{result.length > 0 ? (
                
                result
                
                ) : (

                    "I have No response until you ask, but be careful what you ask for!"
                    
                    )}</h3>
        </div>
    )
}