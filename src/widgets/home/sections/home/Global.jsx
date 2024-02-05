import map from "@/assets/mapa.webp";
import { Typography } from "@material-tailwind/react";

function Global() {
    return (
        <div className="grid justify-items-center items-center grid-cols-1 lg:grid-cols-2 text-center">
            <div className="text-left p-20">
                <div>
                    <Typography variant="h2" color="deep-purple">
                        La innovación y la calidad
                        redefinen tu presencia digital
                    </Typography>
                </div>
                <div>
                    <br />
                    En Ingops, combinamos lenguajes como React, Python y Javascript con plataformas de marketing digital líderes y herramientas como Google Tag Manager y PageSpeed, asegurando calidad en desarrollo web. Nuestro uso avanzado de estas tecnologías nos permite expandir nuestro trabajo de alta calidad más allá de Bogotá D.C. y Colombia.
                </div>
                <div>
                    <br />
                    <ol>
                        <li>Barranquilla - Colombia</li>
                        <li>Medellín - Colombia</li>
                        <li>Ciudad de México - México</li>
                        <li>Chicago Illinois - Estados Unidos</li>
                    </ol>
                </div>
            </div>
            <div>
                <img src={map} alt="map.webp" className="w-96 md:w-auto" />
            </div>
        </div>
    )
}

export default Global