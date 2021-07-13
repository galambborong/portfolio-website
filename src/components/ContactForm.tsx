import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
    <form
      // onSubmit={handleSubmit}
      className="contact"
      id="contact-form"
    >
      <label htmlFor="name">
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </label>
      <label htmlFor="_replyto">
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email address"
        />
      </label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Type your message here"
        value={message}
        onChange={handleChange}
      />
    </form>
  );
};

export default ContactForm;
