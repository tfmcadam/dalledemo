import React, { useRef, } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';


export const ContactMe = () => {

    const [mailSent, setMailSent] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setMailSent(true);

        emailjs.sendForm('service_bwp3ozq', 'template_21wdhlk', form.current, 'GEl6r4rPNrAwjkdJW')
            .then((result) => {
                console.log(form.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current("")
    };

    return (
        <div className="container">
            {
                mailSent ? ( <h1 className='heading' >Thank you for reaching out!</h1>

                ) : (

                    <form ref={form} onSubmit={sendEmail}>

                        {/* from_name */}

                        <div className="row">
                            <div className="col-25">
                                <label for="from_name">Name:</label>
                            </div>
                            <div className="col-75">
                                <input type="text"
                                    id="from_name"
                                    name="from_name"
                                    placeholder='Your Name Here...' required />
                            </div>
                        </div>

                        {/* email address */}

                        <div className="row">
                            <div className="col-25">
                                <label for="reply_to" >Email:</label>
                            </div>
                            <div className="col-75">
                                <input type="email"
                                    id="reply_to"
                                    name="reply_to"
                                    required
                                    placeholder="Your email here..." />
                            </div>
                        </div>

                        {/* message */}

                        <div className="row">
                            <div className="col-25">
                                <label for="message" >Message:</label>
                            </div>
                            <div className="col-75">
                                <textarea className="message"
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="Please leave a message..." />
                            </div>
                            <input type="submit" className='email-btn' value="Send" />
                        </div>
                    </form>


                )
            }
        </div>
    );
};