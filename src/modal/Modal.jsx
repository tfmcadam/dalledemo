import React from "react";
import { ContactMe } from "../components/ContactMe";

export const Modal = props => {
    
    if(!props.show){
        return null
    } 

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">I'd Love to Connect with you</h4>
                </div>
                <div className="modal-body">
                    <ContactMe/>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="modal-btn">Close</button>
                </div>
            </div>
        </div>
    )
}