import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-container">
          <header className="contact-header">
            <h1>Nous contacter</h1>
            <p>Avez-vous des questions? Nous avons des réponses.</p>
          </header>
          <div className="contact-info">
            <h2>Contacts</h2>
            <p>Email: info@colloc.com</p>
            <p>Téléphone: +243 974 942 432</p>
            <p>Adresse: Colloc, Goma, RDC</p>
          </div>
        </div>
        <div className="map-container">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.123456!2d29.221389!3d-1.658501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ddfddf1234!2sMaxilab%20Sarl%2C%20Goma%2C%20DRC!5e0!3m2!1sen!2s!4v1603222273758!5m2!1sen!2s"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
