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
      url: "https://alanzalazar.github.io/FunvalG3/",
      img: "/Integrantes/alan.jpg",
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
    <footer className="bg-cover bg-center text-black py-8 text-center border-t-4 border-black bg-[url('/footerAmarillo2.jpg')] dark:bg-[url('/fondovioleta.png')] dark:text-purple-600">
      <h3 className="font-extrabold text-4xl mb-6">DESIGNFRONT</h3>

      <div className="flex flex-wrap justify-center gap-30">
        {miembrosDelGrupo.map((miembro) => (
          <a
            key={miembro.nombre}
            href={miembro.url}
            target="_blank"
            className="flex flex-col items-center hover:text-red-600 transform hover:scale-105 transition dark:hover:text-cyan-600"
          >
            <img
              src={miembro.img}
              alt={miembro.nombre}
              className="w-40 h-40 rounded-full mb-2 border-4 border-black shadow"
            />
            <span className="font-bold text-2xl">{miembro.nombre}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
