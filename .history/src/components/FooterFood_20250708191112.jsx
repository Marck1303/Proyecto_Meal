import React from "react";

export default function FooterFood() {
  const miembrosDelGrupo = [
    { nombre: "Marco Arias", url: "https://tusitio.com/edwin", img: "" },
    { nombre: "Alan Salazar", url: "https://tusitio.com/stevfen", img: "" },
    { nombre: "Luis Zegarra", url: "https://tusitio.com/maria", img: "" },
    {
      nombre: "Edwin Alzate",
      url: "https://alzate1075.github.io/funval-G3/",
      img: "/Integrantes/edwin.png",
    },
  ];

  return (
    <footer className="bottom-0 left-0 w-full bg-[#fbc81d] text-black py-3 shadow-lg z-50">
      <h3 className="font-bold mb-2">Equipo de Desarrollo</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {miembrosDelGrupo.map((miembro) => (
          <a
            key={miembro.nombre}
            href={miembro.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white font-semibold"
          >
            {miembro.nombre}
            {miembro.img && (
              <img
                src={miembro.img}
                alt={miembro.nombre}
                className="w-8 h-8 rounded-full inline-block ml-2"
              />
            )}
          </a>
        ))}
      </div>
    </footer>
  );
}
