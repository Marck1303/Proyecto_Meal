import React from "react";

export default function FooterFood() {
  const miembrosDelGrupo = [
    { nombre: "Marco Arias", url: "https://tusitio.com/edwin" },
    { nombre: "Alan Salazar", url: "https://tusitio.com/stevfen" },
    { nombre: "Luis Zegarra", url: "https://tusitio.com/maria" },
    { nombre: "Edwin Alzate", url: "https://alzate1075.github.io/funval-G3/" },
  ];

  return (
    <footer className="bg-[#fbc81d] text-black py-4 text-center">
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
          </a>
        ))}
      </div>
    </footer>
  );
}
