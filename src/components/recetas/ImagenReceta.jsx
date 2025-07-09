export default function ImagenReceta({ src, alt, onVideoClick, mostrarBotonVideo = false }) {
  return (
    <div className="relative w-full aspect-[4/3] min-h-[250px] rounded-lg shadow-lg overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      {mostrarBotonVideo && (
        <button
          onClick={onVideoClick}
          className="absolute top-4 left-4 bg-white/80 text-red-600 hover:bg-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold"
        >
          Mira el video
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 15V9l5 3-5 3z" />
          </svg>
        </button>
      )}
    </div>
  );
}
