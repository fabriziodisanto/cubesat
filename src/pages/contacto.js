import React from 'react';
import img from "../img/img4.jpg"

export default function Contact() {
  return (
    <section className="contacto">
      <img src={img} alt="logo" />
      <p>SOLUCIONES & LOGISTICA</p>
      <p>Mail:<a href="mailto:solylog@gmail.com">solylog@gmail.com</a></p>
      <p>Cel:<a href="tel:1144407032">(11)4440-7032</a></p>
      
      <p>Asesor Técnico: Ing.Jose Di Santo</p>
    </section>
  );
}
