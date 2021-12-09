import React from 'react';
import './index.css';

function ContactPage() {
  return (
    <div className="contact_page">
      <h1 className="title">This site was developed by Kateryna Horulia</h1>
      <div>Contact me by using this address</div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.642643949895!2d30.632899315495106!3d50.39185989946625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c44bfcb56df9%3A0x9bd682258ba10e94!2sBorysa%20Hmyri%20St%2C%2017%2C%20Kyiv%2C%2002000!5e0!3m2!1sen!2sua!4v1639083697729!5m2!1sen!2sua"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        title="location"
      />
    </div>
  );
}

export default ContactPage;
