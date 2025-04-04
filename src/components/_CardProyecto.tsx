import React from "react";
import type { CardProyectsProps } from "../types/index";

const CardProyecto = (props: CardProyectsProps) => {
  const { card, index } = props;
  const { image, title, description, iconos, pagina } = card;

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-duration="1200"
      data-aos-delay={`${index * 150}`}
      className="proyecto__card w-full max-w-[380px] flex flex-col items-center justify-center bg-black border-solid border-[2px] border-main_celeste rounded-[8px] py-[35px] px-[5px] gap-[7px] text-center cursor-pointer shadow-cardShadow transition duration-300 md:max-w-[100%] mt-10 lg:hover:scale-[1.05] hover:scale-[1] hover:shadow-iconos"
    >
      <img
        className="w-full max-w-[280px] h-auto rounded-[6px] object-cover"
        src={`/portafolio-2024/${image}`}
        alt="proyecto"
      />

      <h4 className="font-semibold text-xl text-main_celeste max-w-[300px]">
        {title}
      </h4>

      <p className="font-poppins">{description}</p>

      <div className="flex flex-wrap justify-center gap-4 mt-3">
        {iconos.map((icon, index) => (
          <div key={index} className="p-2 bg-white rounded-full">
            <img
              src={`/portafolio-2024/${icon}`}
              className="w-6 h-6"
              alt={`icono tecnología ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <a
        href={pagina}
        target="_blank"
        className="w-[75%] px-3 py-2 bg-main_celeste rounded-[6px] mt-5 transition duration-300 hover:bg-black hover:border-solid hover:border-[2px] hover:border-main_celeste hover:text-main_celeste"
      >
        Ver proyecto
      </a>
    </div>
  );
};

export default CardProyecto;
