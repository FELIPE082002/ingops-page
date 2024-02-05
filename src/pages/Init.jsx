// import Background from "@/assets/background.jpg"; // Asegúrate de que la ruta es correcta
import { WhyChooseUs, Header } from "@/widgets";
import CallToAction from "@/widgets/home/sections/home/CallToAction";
import ForYou from "@/widgets/home/sections/home/ForYou";
import Global from "@/widgets/home/sections/home/Global";
import Tools from "@/widgets/home/sections/home/Tools";

function Init() {

    const bg_color_secondary = "bg-gray-500/10"

    function BackgroundElement({ children, color }) {
        return (
            <div className={`${color} py-7`}>
                {children}
            </div>
        )
    }

    return (
        <div className="w-full">
            <BackgroundElement>
                <Header />
            </BackgroundElement>
            <BackgroundElement color={bg_color_secondary}>
                <WhyChooseUs />
            </BackgroundElement>
            <BackgroundElement >
                <ForYou />
            </BackgroundElement>
            <BackgroundElement >
                <CallToAction />
            </BackgroundElement>
            <BackgroundElement >
                <Tools />
            </BackgroundElement>
            <BackgroundElement color={bg_color_secondary} >
                <Global />
            </BackgroundElement>
            {/* <BackgroundElement color={bg_color_secondary} >
                <AboutUs />
            </BackgroundElement> */}
        </div>
    );
}

export default Init;
