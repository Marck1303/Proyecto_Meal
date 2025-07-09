export default function VideoModal({ videoId, onClose }) {
  const cerrar = (e) => {
    if (e.target.id === "video-modal-fondo") onClose();
  };

  return (
    <div
      id="video-modal-fondo"
      onClick={cerrar}
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
    >
      <div className="w-full max-w-2xl p-4">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Video de preparación"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
