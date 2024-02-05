import girl from "@/assets/girl-cta.webp";
import circles from "@/assets/circles_img.webp";
import { Typography } from "@material-tailwind/react";

function CallToAction() {


    const message = `Hola, estoy interesado(a) en sus servicios. ¿Podrían enviarme más información? Gracias.`;
    const formatMessage = encodeURIComponent(message)
    
    let imageCircles
    
    let imagePath = circles.split('?')[0];
    
    if (imagePath.startsWith('/')) {
        imageCircles = imagePath.substring(1);
    }

    return (
        <div style={{ backgroundImage: `url(${imageCircles})` }} className={`flex relative flex-col justify-items-center items-center text-center bg-cover bg-center `}>
            <div className="text-white p-5">
                <Typography variant="h2">!NO DEJES QUE PASE ESTA OPORTUNIDAD!</Typography>
                <Typography variant="h2">HAZ REALIDAD TUS METAS</Typography>
            </div>
            <div className="md:-mt-12">
                <img src={girl} alt="" />
            </div>
            <a
                href={`https://wa.me/573023075831?text=${formatMessage}`} target="_blank" rel="noopener noreferrer"
                className="bg-deep-purple-400 absolute text-white font-bold text-4xl py-2 px-4 rounded-full bottom-0 m-5 "
            >
                <button >
                    PREGUNTA HOY
                </button>
            </a>
        </div >
    )
}

export default CallToAction