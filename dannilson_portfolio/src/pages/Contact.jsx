
import React from "react";

function Contact() {
  return (
    <section>
      <h2>Contato</h2>
      <form>
        <label>
          Nome:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Mensagem:
          <textarea name="message" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
