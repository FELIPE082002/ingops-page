import React from 'react'
import Logo from "@/assets/logo.png";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Button, Input, Typography } from '@material-tailwind/react';

function Footer() {
    return (
        <div className="w-full grid justify-items-center items-center grid-cols-1 gap-5 lg:grid-cols-4 text-center text-white p-5 bg-deep-purple-500">
            <div className='flex flex-col gap-5 justify-center items-center'>
                <div>
                    <img className='w-24' src={Logo} alt="Logo" />
                </div>
                <div>INGOPS</div>
                <div>
                    Potencia tu éxito online con
                    Ingops y nuestos software
                    innovadores y estrategias de
                    marketing digital.
                </div>
            </div>
            <div className='flex flex-col gap-5 justify-center items-center'>
                <div className='flex gap-5'>
                    <div>
                        <PhoneIcon className='w-10' />
                    </div>
                    <div className='text-left'>
                        <div>Teléfono:</div>
                        <div>(+57) 3023075831</div>
                    </div>
                </div>
                <div className='flex flex-col gap-2.5 justify-center items-center'>
                    <Typography variant='h5'>
                        LINKS
                    </Typography>
                    <div>Inicio</div>
                    <div>Planes</div>
                    <div>Terminos</div>
                    <div>Contáctanos</div>
                </div>
            </div>
            <div className='flex flex-col gap-5 justify-center items-center'>
                <div className='flex items-center gap-5'>
                    <div>
                        <EnvelopeIcon className='w-10' />
                    </div>
                    <div className='text-left'>
                        <div>ingops.info@gmail.com</div>
                    </div>
                </div>
                <div className='flex flex-col gap-2.5 justify-center items-center'>
                    <Typography variant='h5'>
                        HORARIOS
                    </Typography>
                    <div>
                        Lunes a viernes de
                        <br />
                        9:00 a.m. a 6:00 p.m.
                    </div>

                    <div>
                        Sábados de
                        <br />
                        10:00 a.m. a 5:00 p.m.
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5 justify-center items-center'>
                <div className='flex items-center gap-5'>
                    <div>
                        <MapPinIcon className='w-10' />
                    </div>
                    <div className='text-left'>
                        <div>Bogotá D.C. - Colombia</div>
                    </div>
                </div>
                <div className='flex flex-col gap-2.5 justify-center items-center'>
                    <Typography variant='h5'>
                        COMUNICATE
                    </Typography>
                    <div>
                        Contactanos para tener asesoramiento
                    </div>
                    <div>
                        <Input className='bg-purple' label='Email' />
                        <br />
                        <Button className='bg-deep-purple-300 w-full rounded-full'>ENVIAR</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer