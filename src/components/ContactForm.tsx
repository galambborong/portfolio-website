import React from 'react';

const ContactForm: React.FC = () => {
  return (<form 
      // onSubmit={} 
      className="contact" 
      id="contact-form"
      >
    <label htmlFor="name">
      <input type="text" id="name" />
      
    </label>
   
  </form>);
};

export default ContactForm;