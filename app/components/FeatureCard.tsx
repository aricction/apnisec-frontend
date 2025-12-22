import Image from "next/image";
import CardData from "../data/features.json";

export function FeatureCard() {
  return (
    <div className="flex flex-wrap gap-16">
      {CardData.map((card, index) => (
        <div
          key={index}
          className="relative max-w-sm w-full pt-14 overflow-visible"
        >
          {/* CARD GLOW */}
          <div className="pointer-events-none absolute inset-x-6 top-0 h-28  blur-3xl rounded-full"  style={{
              backgroundColor: card.color,
              opacity: 0.35,
            }}></div>

          {/* CARD BORDER */}
          <div
            className="relative rounded-2xl p-[1.5px]"
            style={{
              background: `linear-gradient(to bottom, ${card.color}, transparent)`,
            }}
          >

            {/* CARD BODY */}
            <div className="relative rounded-2xl bg-[#070B1F] text-white px-6 pt-16 pb-8 overflow-visible">

              {/* ICON */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-30">
                <div
                  className="absolute inset-0 rounded-full blur-xl"
                  style={{
                    backgroundColor: card.color,
                    opacity: 0.6,
                  }}
                />

               

                <div className={`relative  rounded-full p-4 shadow-xl`} style={{backgroundColor: card.color}}>
                  <Image
                    src="/asset/zoom-lens.png"
                    alt="zoom lens"
                    width={44}
                    height={44}
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col items-center text-center gap-4">
                <h1
                  className="text-2xl font-semibold"
                  style={{ fontFamily: "Lissen" }}
                >
                  {card.title}
                </h1>

                <div
                  className="flex flex-col gap-2 text-sm text-gray-300"
                  style={{ fontFamily: "Lissen" }}
                >
                  {card.list.map((feature, i) => (
                    <p key={i}>{feature}</p>
                  ))}
                </div>
<div
  className="inline-block rounded-full transition-all duration-300 hover:scale-105"
  style={{
    boxShadow: `
      0 0 14px ${card.color}90,
      0 0 36px ${card.color}60
    `,
  }}
>
  <button
    className="p-3 px-6 rounded-full text-white font-medium transition-all duration-300 hover:brightness-110"
    style={{
      backgroundColor: card.color,
      boxShadow: `inset 0 0 12px ${card.color}80`,
    }}
  >
    Learn More
  </button>
</div>



              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
