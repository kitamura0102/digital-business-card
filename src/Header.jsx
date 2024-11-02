import React from "react";

export default function Header() {
  return (
    <header>
      <div className="picture"></div>
      <div className="info">
        <h1>Raúl Almonte</h1>
        <h2>Frontend Developer</h2>
        <small>raul_almonte001@hotmail.com</small>
        <div className="buttons">
          <button className="email">
            <i class="fa-solid fa-envelope "></i><a href="mailto:raul_almonte001@hotmail.com">Email</a>
          </button>
          <button className="linkedin">
            <i class="fa-brands fa-linkedin"></i> <a href="https://www.linkedin.com/in/ra%C3%BAl-almonte-5836b01b5/" target="_blank">LinkedIn</a>
          </button>
        </div>
      </div>
    </header>
  );
}
