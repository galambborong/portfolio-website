import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inside handleSubmit');
  };

  const handleChange = (e: {
    target: {
      value: React.SetStateAction<string>;
      id: React.SetStateAction<string>;
    };
  }) => {
    const { value, id } = e.target;
    if (id === 'name') {
      setName(value);
    }
    if (id === 'email') {
      setEmail(value);
    }
    if (id === 'message') {
      setMessage(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact" id="contact-form">
      <label htmlFor="name">
        <input
          type="text"
          id="name"
          value={name}
          className="contact-input invalid"
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </label>
      <p id="name-invalid"></p>
      <label htmlFor="_replyto">
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="contact-input invalid"
        />
      </label>
      <p id="email-invalid"></p>
      <textarea
        className="contact-input invalid"
        name="message"
        id="message"
        placeholder="Type your message here"
        value={message}
        onChange={handleChange}
      />
      <p id="message-invalid"></p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
