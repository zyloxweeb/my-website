import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      alert('Messaggio inviato!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Errore nell\'invio del messaggio', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Messaggio" required />
      <button type="submit">Invia</button>
    </form>
  );
}

export default ContactForm;
