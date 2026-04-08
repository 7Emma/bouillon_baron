"use client";

import { useEffect, useState } from "react";

const FOOD_IMAGE =
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqY1BBc-mAE5TUtM1tNT5Mt5ADWxc-qr11fR06K7lAvquZGCk2OL3bstPrLdS2ODQuUC9YfLmUF5ONkH5FwMsanIVS8GHXmkWo6YmUGIYkXMKyGZ_b7w6OPAiezLyxLCC-mygb_=w172-h224-p-k-no";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,600;1,700&family=Outfit:wght@300;400;500;600&display=swap');

        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body    { font-family: 'Outfit', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1;   transform: scale(1);    }
          50%       { opacity: 0.4; transform: scale(0.65); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0);   }
          50%       { transform: translateY(-6px); }
        }
        @keyframes zoomIn {
          from { transform: scale(1.08); }
          to   { transform: scale(1);    }
        }

        .anim-fade-up-1 { animation: fadeUp 0.7s 0.05s ease both; }
        .anim-fade-up-2 { animation: fadeUp 0.7s 0.18s ease both; }
        .anim-fade-up-3 { animation: fadeUp 0.7s 0.32s ease both; }
        .anim-fade-up-4 { animation: fadeUp 0.7s 0.46s ease both; }
        .anim-fade-up-5 { animation: fadeUp 0.7s 0.58s ease both; }
        .anim-fade-in   { animation: fadeIn 1s 0.15s ease both;   }
        .anim-card-1    { animation: fadeUp 0.8s 0.75s ease both; }
        .anim-card-2    { animation: fadeUp 0.8s 0.92s ease both; }
        .anim-draw      { stroke-dasharray: 230; stroke-dashoffset: 230; animation: drawLine 0.9s 0.65s ease forwards; }
        .anim-zoom      { animation: zoomIn 1.4s 0s ease both;   }
        .pulse-dot      { animation: pulse-dot 2s ease infinite;  }
        .float-card     { animation: float 4s ease-in-out infinite; }

        .hero-img-wrap:hover .hero-img { transform: scale(1.03); }
        .hero-img { transition: transform 7s ease; }
      `}</style>

      <section
        className="font-body relative flex min-h-screen items-center overflow-hidden bg-[#FAF8F4] max-[560px]:min-h-0"
        style={{
          backgroundImage: `url('${FOOD_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "calc(100% + 80px) center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* White fade overlay for readability */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(250,248,244,1) 0%, rgba(250,248,244,0.95) 30%, rgba(250,248,244,0.6) 50%, rgba(250,248,244,0.2) 70%, rgba(250,248,244,0) 85%)",
          }}
        />

        {/* ── Ambient circle ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-6vw] top-1/2 -translate-y-1/2 rounded-full bg-orange-500/5"
          style={{ width: "52vw", height: "52vw" }}
        />

        {/* ═══════════════════════════════════ LEFT ═══ */}
        <div className="relative z-10 flex w-full max-w-[680px] flex-col justify-center px-[clamp(24px,8vw,120px)] pb-[clamp(60px,8vh,100px)] pt-[clamp(80px,10vh,140px)] pr-[clamp(24px,5vw,72px)] max-[860px]:px-6 max-[860px]:pt-28 max-[860px]:pb-10">
          {/* Headline */}
          <h1
            className={`font-display max-w-[560px] leading-[1.06] text-[#1A1208] max-[860px]:text-[clamp(38px,8vw,54px)] max-[480px]:text-[36px] ${mounted ? "anim-fade-up-2" : "opacity-0"}`}
            style={{ fontSize: "clamp(46px, 5.4vw, 78px)" }}
          >
            Nous croyons{" "}
            <span className="relative italic text-orange-500">
              au bon goût
              {/* Animated underline */}
              <svg
                aria-hidden
                viewBox="0 0 220 12"
                className="absolute -bottom-1.5 left-0 w-full overflow-visible"
                style={{ height: 12 }}
              >
                <path
                  d="M2 8 Q 28 2, 55 8 Q 82 14, 110 8 Q 138 2, 165 8 Q 192 14, 218 8"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="anim-draw"
                />
              </svg>
            </span>
            <br />
            pour offrir le sourire
          </h1>

          {/* Body copy */}
          <p
            className={`mt-8 max-w-[440px] text-[0.95rem] font-light leading-[1.9] text-[#7A7060] max-[480px]:text-[0.87rem] ${mounted ? "anim-fade-up-3" : "opacity-0"}`}
          >
            Des ingrédients soigneusement sélectionnés jusqu’à la touche finale
            — chaque plat est pensé pour apporter une vraie joie à votre table.
          </p>

          {/* CTA */}
          <div
            className={`mt-9 flex flex-wrap items-center gap-4 max-[860px]:flex-col max-[860px]:items-stretch ${mounted ? "anim-fade-up-5" : "opacity-0"}`}
          >
            <a
              href="#reservation"
              className="inline-block rounded-lg bg-orange-500 px-10 py-[15px] text-[0.92rem] font-semibold text-white shadow-[0_8px_24px_rgba(249,115,22,0.30)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-[0_14px_32px_rgba(249,115,22,0.38)] max-[860px]:text-center"
            >
              Réserver une table
            </a>

            <a
              href="#menu"
              className="inline-flex items-center gap-2.5 text-[0.92rem] font-medium text-[#1A1208]/70 transition-opacity duration-200 hover:opacity-100 max-[860px]:justify-center"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-current text-sm">
                ↓
              </span>
              Voir la carte
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
