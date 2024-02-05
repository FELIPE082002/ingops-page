import React from "react";
import { NavLink } from "react-router-dom";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import icon from "@/assets/icon.webp";

function NavbarMain() {
    const [openNav, setOpenNav] = React.useState(false);

    const message = `Hola, estoy interesado(a) en sus servicios. ¿Podrían enviarme más información? Gracias.`;

    const formatMessage = encodeURIComponent(message);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setOpenNav(false);
            }
        };

        window.addEventListener("resize", handleResize);

        // Limpiar el event listener al desmontar
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Lista de rutas para la barra de navegación
    const navLinks = [
        { path: "/", name: "HOME" },
        { path: "/marketing", name: "PLANES" },
        // { path: "/TERMINO", name: "TERMINOS" },
    ];

    // Función para cerrar la barra móvil al hacer clic en un enlace
    const closeMobileNav = () => setOpenNav(false);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li>

                <NavLink
                    aria-label="links"
                    to='/'
                    className="flex items-center"
                    onClick={closeMobileNav}
                >
                    <img src={icon} alt="icon.webp" className="w-20 hidden md:inline-block" />
                </NavLink>
            </li>
            <li className="flex flex-col lg:flex-row gap-2">
                {navLinks.map((link) => (
                    <Typography
                        variant="paragraph"
                        color="gray"
                        className="p-1 font-normal"
                        key={link.path}
                    >
                        <NavLink
                            to={link.path}
                            aria-label="links"
                            className="flex items-center"
                            onClick={closeMobileNav}
                            style={({ isActive }) => isActive ? { color: 'deep-purple' } : null}
                        >
                            {link.name}
                        </NavLink>
                    </Typography>
                ))}
            </li>
        </ul>
    );

    return (
        <Navbar
            className="bg-opacity-80 border-none sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">

            <div className="flex gap-2 items-center justify-center text-black-900">
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <div className="flex items-center gap-x-1">
                        <a href={`https://wa.me/573023075831?text=${formatMessage}`} aria-label="contact" target="_blank" rel="noopener noreferrer" >
                            <Button
                                variant="gradient"
                                color="deep-purple"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>CONTÁCTANOS</span>
                            </Button>
                        </a>
                    </div>
                    <IconButton
                        className="flex flex-row justify-center ml-auto h-6 text-inherit p-5 lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                        color="deep-purple"
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>

            <MobileNav open={openNav}>
                {navList}
                <div className="flex items-center gap-x-1">
                    <a href={`https://wa.me/573023075831?text=${formatMessage}`} aria-label="contact" target="_blank" rel="noopener noreferrer" >
                        <Button fullWidth variant="gradient" size="sm" color="deep-purple">
                            <span>Contactanos</span>
                        </Button>
                    </a>
                </div>
            </MobileNav>
        </Navbar>
    );
}

export default NavbarMain;