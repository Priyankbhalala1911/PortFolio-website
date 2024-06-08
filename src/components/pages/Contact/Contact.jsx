import React, { useRef, useState } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const ref = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission

        emailjs.sendForm("service_wbfkikt", "template_rectr5m", ref.current, {
            publicKey: "UVtCVq4Kseeiln1LD"
        }).then(() => console.log("email sent successfully"),
            (error) => { console.log(error.text) },
            e.target.reset()
        )
            .catch((e) => console.log(e))

        setFormData({name:"",email:"",message:""})
        console.log(formData);
    };

    return (
        <section className="contact" data-aos="zoom-out-right" data-aos-delay="25"
            data-aos-duration="1000">
            <h2>Contact</h2>
            <form className="contact-form" ref={ref} onSubmit={handleSubmit}>
                <input data-aos="zoom-in-down"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input data-aos="zoom-in-down"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea data-aos="zoom-in-down"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button data-aos="zoom-in-down" type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact