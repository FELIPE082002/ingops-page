import { Typography } from "@material-tailwind/react";
import { Cards } from "@/widgets";
import { benefits } from "@/data";

function WhyChooseUs() {
    return (
            <div className='grid text-center'>
                <div>
                    <Typography variant="h2" color="deep-purple">
                        CONOCE TODOS NUESTROS SERVICIOS
                    </Typography>
                </div>
                <div className='grid grid-cols-1  md:grid-cols-3 m-5 items-center justify-items-center'>
                    {benefits.map((item, index) => (
                        <div key={index} className={item.style[0].space}>
                            <Cards img={item.img} alt_img={item.alt_img} title={item.title} text={item.text} items={item.items} style={item.style} />
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default WhyChooseUs;
