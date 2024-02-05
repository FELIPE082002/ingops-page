import { Button, Typography } from "@material-tailwind/react"
import headerImg from "@/assets/header_image.webp";

function Header() {
  return (
    <div className="grid justify-items-center items-center grid-cols-1 lg:grid-cols-2 text-center">
      <div className="flex flex-col p-5 ">
        <Typography variant="h1" color="deep-purple" className="m-5">
          ¡BIENVENIDOS A INGOPS!
        </Typography>
        <div className="flex justify-center m-5">En Ingops, combinamos más de 3 años de experiencia en tecnología con una especialización en diseño y desarrollo web y de software a medida. Nuestro equipo de ingenieros y desarrolladores se enfoca en crear soluciones innovadoras y efectivas para ayudarte a alcanzar tus metas empresariales, adaptándonos a tus necesidades específicas.</div>
        <div className="m-5">
          <Button color="deep-purple" className="rounded-full shadow-md">
            <Typography variant="h5">+100 trabajos</Typography>
            <Typography className="text-xs">en Latinoamerica</Typography>
          </Button>
        </div>
      </div>
      <div>
        <img src={headerImg} alt="header_img.webp" className="w-96 md:w-auto" />
      </div>
    </div>
  )
}

export default Header