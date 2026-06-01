const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935315.4890268825!2d-71.44939173531357!3d18.667896744718266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8838def1b6f5%3A0xa6020f24060df7e0!2sDominican%20Republic!5e0!3m2!1sen!2sin!4v1779872928897!5m2!1sen!2sin";

export default function MapSection() {
  return (
    <div className="relative w-full h-full min-h-0 bg-[#111] overflow-hidden">
      <iframe
        title="Property search map"
        src={MAP_EMBED_URL}
        className="absolute inset-0 h-full w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <button
        type="button"
        className="absolute top-5 right-5 z-10 h-[44px] px-5 rounded-xl bg-black/80 backdrop-blur-md border border-[#2a2a2a] text-white font-medium"
      >
        Draw
      </button>
    </div>
  );
}
