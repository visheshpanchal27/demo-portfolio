import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080808] stage-texture"
    >
      {/* Dramatic artist background glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main warm glow — center stage feel */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-[#E85D26]/5 blur-[120px] md:blur-[160px]" />
        {/* Gold accent glow — right side where photo is */}
        <div className="absolute top-1/4 right-0 w-[300px] h-[600px] md:w-[500px] md:h-[800px] rounded-full bg-[#C9A84C]/6 blur-[100px] md:blur-[140px]" />
        {/* Deep shadow left */}
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#E85D26]/3 blur-[80px]" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.025] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <HeroContent />
          <div className="flex justify-center lg:justify-end">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
