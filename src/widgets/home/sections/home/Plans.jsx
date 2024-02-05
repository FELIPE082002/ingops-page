import { Typography } from "@material-tailwind/react";
import { PricingCard } from "@/widgets";
import { plans } from "@/data";

function Plans() {
    return (

            <div className='grid m-5'>
                <div>
                    <Typography variant="h2" color="blue-gray">
                        Nuestros planes
                    </Typography>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 m-5 items-center justify-items-center'>
                    {plans.map((item, index) => (
                        <PricingCard key={index} color={item.color} title={item.title} price={item.price} items={item.items} />
                    ))}
                    {/* <PricingCard title="Mi Plan" price="100" items={[{ text: "Característica 1" }, { text: "Característica 2" }]} /> */}

                </div>
            </div>
    )
}

export default Plans