export default function FloatingBadge({
  icon: Icon,
  title,
  subtitle,
}) {
  return (
    <div className="bg-zinc-800 rounded-full shadow-soft px-5 py-3 flex items-center gap-4 min-w-[260px]">
      <div className="w-10 h-10 rounded-full bg-theme-gold text-black flex items-center justify-center">
        <Icon size={18} />
      </div>

      <div>
        <h5 className="font-bold text-white text-md">
          {title}
        </h5>

        <p className="text-sm text-gray-400 text-xs">
          {subtitle}
        </p>
      </div>
    </div>
  );
}