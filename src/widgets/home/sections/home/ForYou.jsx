import img_2 from "@/assets/imagen_2.webp";
import { Typography } from "@material-tailwind/react";

function ForYou() {
    return (
        <div className="grid justify-items-center items-center grid-cols-1 lg:grid-cols-2 text-center">
            <div>
                <img src={img_2} alt="header_img.webp" className="w-96 md:w-auto" />
            </div>
            <div className="text-left p-10">
                <div>
                    <Typography variant="h2" color="deep-purple">

                        ¡CONOCE LO QUE TENMOS PARA TI!
                    </Typography>
                </div>
                <div>
                    <br />

                    Nuestro equipo especializado en desarrollo de software y marketing digital ofrece asesoría personalizada para tu negocio en creación de páginas web, gestión de redes sociales, y estrategias de posicionamiento SEO y SEM
                </div>
                <div>
                    <br />
                    Ofrecemos soluciones a medida:
                    <br />
                    <br />
                    <ol>
                        <li>Automatización para eficiencia</li>
                        <li>Seguridad de datos, tecnología innovadora</li>
                        <li>Mayor visibilidad de marca, generación de leads</li>
                        <li>Mejora en la relación con clientes</li>
                        <li>Incremento de ventas e ingresos.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default ForYou