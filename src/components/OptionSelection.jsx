import React from "react";

export default function OptionSelection({arrayItems, selectOption}) {
    return(
        <div>
            <h1 className="heading">React AI APP</h1>
            <div className="grid-main">
                {arrayItems.map((item, i) =>{
                    return (
                        <div className="grid-child" key={i} onClick={() => selectOption(item.option)}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                    );
                })}
            </div>
        </div>
    )
}