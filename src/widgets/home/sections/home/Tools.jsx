import { Typography } from "@material-tailwind/react"
import ToolsColumn from "../../common/ToolsColumn";
import { tools } from "@/data";

function Tools() {
  return (
    <div className="flex flex-col justify-items-center text-center m-5">
      <div>
        <div>
          <Typography variant="h2" color="deep-purple">
            ESTAS SON LAS HERRAMIENTAS QUE NOS AYUDAN
            <br />
            A BRINDARTE LA MEJOR CALIDAD
          </Typography>
        </div>
        <div>
          <Typography variant="paragraph">En Ingops hacemos uso de una gran variedad de plataformas, herramientas y lenguajes  de programación para poder
            <br />
            darte la mejor calidad en cada uno de nuestros servicios.  Siquieres conocer cuales son las que usamos, acá te contamos:</Typography>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 m-10 gap-5">

        {
          tools.map((tool, index) =>
            (<ToolsColumn key={index} tool={tool} />)
          )
        }
      </div>
    </div>
  )
}

export default Tools