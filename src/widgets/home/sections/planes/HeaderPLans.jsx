import { Button, Typography } from "@material-tailwind/react"
import headerImg from "@/assets/header_planes.webp";

function HeaderPLans() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="flex flex-col w-full">
        <h1 className="text-5xl md:text-8xl w-full font-bold text-deep-purple-600">
          ¡CONOCE TODOS NUESTROS PLANES
        </h1>
        <div className="flex w-full inner-shadow-bottom justify-center md:-mt-10">
          <img src={headerImg} alt="header_img.webp" className="w-80 md:w-2/6" />
        </div>
        <div className="p-5">
          <h2 className="text-2xl font-semibold text-deep-purple-500">
           OFRECEMOS 12 PLANES VARIADOS PARA CONVERTIR TUS SUEÑOS EN REALIDAD
          </h2>
          <div>
            En Ingops, ofrecemos servicios y planes diseñados para impulsar el crecimiento exponencial de tu empresa.          </div>
        </div>
      </div>   
    </div>
  )
}

export default HeaderPLans