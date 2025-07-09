import React from "react";

export default function FooterFood() {
  const miembrosDelGrupo = [
    {
      nombre: "Marco Abraham Arias",
      url: "https://tusitio.com/marco",
      img: "/Integrantes/marco.png",
    },
    {
      nombre: "Alan Yoel Zalazar",
      url: "https://tusitio.com/alan",
      img: "/Integrantes/alan.png",
    },
    {
      nombre: "Luis Carlos Zegarra",
      url: "https://tusitio.com/luis",
      img: "/Integrantes/luis.png",
    },
    {
      nombre: "Edwin Dario Alzate",
      url: "https://alzate1075.github.io/funval-G3/",
      img: "/Integrantes/edwin.jpg",
    },
  ];

  return (
    <footer
      className="bg-cover bg-center text-black py-8 shadow-inner text-center border-4 border-black"
      style={{ backgroundImage: "url('/footerAmarillo.jpg')" }}
    >
      <h3 className="font-bold text-3xl mb-4">DESIGNFRONT</h3>

      <div className="flex flex-wrap justify-center gap-30">
        {miembrosDelGrupo.map((miembro) => (
          <a
            key={miembro.nombre}
            href={miembro.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-red-600 transform hover:scale-105 transition"
          >
            <img
              src={miembro.img}
              alt={miembro.nombre}
              className="w-30 h-30 rounded-full mb-2 border-4 border-white shadow"
            />
            <span className="font-bold text-2xl">{miembro.nombre}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
