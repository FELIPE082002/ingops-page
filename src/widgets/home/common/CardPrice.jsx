import React, { useState, useEffect } from 'react';
import { Button, Card } from "@material-tailwind/react";

function CardPrice({ title, price, dollar, items, number }) {

    const [dollarPrice, setDollarPrice] = useState(0);

    const message = `Hola, estoy interesado(a) en su servicio de ${title}. ¿Podrían enviarme más información? Gracias.`;

    const formatMessage = encodeURIComponent(message);

    useEffect(() => {
        setDollarPrice(Math.floor((price / dollar) * 1.03));
    }, [price, dollar]);

    // Función para formatear el precio con puntos como separadores de miles
    const formatPrice = (value) => {
        return new Intl.NumberFormat('es-ES').format(value);
    };

    return (
        <Card className="flex flex-col w-4/5 p-5 gap-2 justify-between ">
            <div>
                <div className="p-2 my-2 w-full rounded-lg shadow-lg text-white bg-deep-purple-500">
                    {title}
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        Por solo
                        <div className="text-deep-purple-500 text-4xl font-semibold">
                            ${formatPrice(price)}*
                        </div>
                        {dollarPrice} USD*
                    </div>
                    <div>
                        Tendrás:
                        <div>
                            <ul>
                                {items.map((item, index) => (
                                    <li key={index}>- {item.text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <a href={`https://wa.me/57${number}?text=${formatMessage}`} target="_blank" rel="noopener noreferrer">
                <Button color="deep-purple">CONTACTANOS</Button>
            </a>
        </Card>
    );
}

export default CardPrice;
