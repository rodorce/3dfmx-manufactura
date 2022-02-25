import React from "react";
import Link from "next/link";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-white">
      <div className="container container-m-p">
        <div className="lg:grid lg:grid-cols-4">
          <h2 className="hidden lg:grid tracking-wide lg:text-xl uppercase font-semibold px-4 py-2 text-lg">
            Páginas
          </h2>
          <h2 className="hidden lg:grid tracking-wide text-xl uppercase font-semibold lg:col-span-3 lg:col-start-3 px-4 py-2">
            Suscribete a nuestro newsletter
          </h2>
          <div className="px-4 py-2">
            <h2 className="lg:hidden tracking-wide lg:text-xl uppercase font-semibold px-4 py-2 text-lg">
              Páginas
            </h2>
            <ul>
              <li className="p-3">
                <Link href="/">Inicio</Link>
              </li>
              <li className="p-3">
                <Link href="/manufacturing">Procesos de manufactura</Link>
              </li>
              <li className="p-3">
                <Link href="/materials">Materiales</Link>
              </li>
              <li className="p-3">
                <a href="#recommendation">Nuestra recomendación</a>
              </li>
              <li className="p-3">
                <a href="https://3dfactory.mx" rel="external">
                  Tienda en línea
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 py-2">
            <ul>
              <li className="p-3">
                <a href="https://3dfactory.mx/pages/soporte" rel="external">
                  Servicio Técnico
                </a>
              </li>
              <li className="p-3">
                <a
                  href="https://3dfactory.mx/pages/servicios-de-impresion-3d"
                  rel="external"
                >
                  Servicios de impresión 3D
                </a>
              </li>
              <li className="p-3">
                <a href="https://3dfactory.mx/pages/visitanos" rel="external">
                  Visitanos
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 py-2 col-span-2">
            <h2 className="lg:hidden tracking-wide text-lg uppercase font-semibold px-4">
              Suscribete a nuestro newsletter
            </h2>
            <p className="px-4 py-3">
              Suscríbete y enterate de nuevos materiales y procesos de
              manufactura que llegan a 3D FACTORY MX
            </p>
            <div className="grid grid-cols-4 shadow-lg">
              <input
                placeholder="Tu correo electrónico"
                className="p-4 col-span-3 bg-white text-gray-400"
              />
              <button className="rounded-tr-lg rounded-br-lg bg-blue-600 text-white hover:bg-blue-700">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
