import React from "react";

export default function FooterFood() {
  const miembrosDelGrupo = [
    {
      nombre: "Marco Arias",
      url: "https://tusitio.com/marco",
      img: "/Integrantes/marco.png",
    },
    {
      nombre: "Alan Salazar",
      url: "https://tusitio.com/alan",
      img: "/Integrantes/alan.png",
    },
    {
      nombre: "Luis Zegarra",
      url: "https://tusitio.com/luis",
      img: "/Integrantes/luis.png",
    },
    {
      nombre: "Edwin Alzate",
      url: "https://alzate1075.github.io/funval-G3/",
      img: "/Integrantes/edwin.png",
    },
  ];

  return (
    <footer className="bg-(url["/public/footerAmarillo.jpg"]) text-black py-6 shadow-inner text-center border-2 border-black">
      <h3 className="font-bold text-2xl mb-4">DESIGNFRONT</h3>

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
              className="w-16 h-16 rounded-full mb-2 border-4 border-white shadow"
            />
            <span className="font-bold text-2xl">{miembro.nombre}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
