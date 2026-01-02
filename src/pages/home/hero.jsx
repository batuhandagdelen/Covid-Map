import React from "react";

const Hero = () => {
  return (
    <div className="bg-linear-to-br from-blue-900 via-indigo-900 to-purle-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden ">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full blur-3xl" />
        <div className="absolute  bg-purple-500 -bottom-40 -left-40 w-80 h-80  rounded-full blur-3xl" />
      </div>

      <div className="container py-10 pb-16 md:pt-25 md:pb-30 grid md:grid-cols-2 gap-10 relative z-10 ">
        <div className="flex flex-col gap-6 md:gap-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white via-pink-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            COVID-19 CANLI TAKİP
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            Koronavirüs hastalığı 2019 şiddetli akut solunum sendromu
            koronavirüsü 2'nin neden olduğu bulaşıcı bir hastalıktır. İlk vaka
            ile Çin'in Hubei eyaletinin Wuhan şehrinde Kasım 2019 tarihinde
            karşılaşılmıştır.
          </p>

          <div className="flex items-center gap-5">
            <button className="hero-btn">Nasıl Korunulur?</button>
            <button className="hero-btn border-2 border-white/30">
              Doktor Bul
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/hero.png"
            alt="photo"
            className="w-75 md:h-62.5 dropshadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
