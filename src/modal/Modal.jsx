import React from "react";
import "./Modal.css"
import { ContactMe } from "../components/ContactMe";

export const Modal = props => {

    if (!props.show) {
        return null
    }

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">
                        <a rel="noreferrer" id="linkedIn" href="https://www.linkedin.com/in/terrance-mcadam/" target="_blank">
                            <i class="fa-brands fa-linkedin fa-3x"></i></a>
                        I'd Love to Connect with you
                        <a  rel="noreferrer" id="gitHub" href="https://github.com/tfmcadam" target="_blank">
                            <i class=" fa-brands fa-github fa-3x"></i></a>
                    </h4>
                </div>
                <div className="modal-body">
                    <ContactMe />
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="modal-btn">Close</button>
                </div>
            </div>
        </div>
    )
}