'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className='z-20 w-full bg-darkbg/60'>
      <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>
        <Image src="/home-4.png" priority width="800" height="800" alt="Profile pic" />

        <div className='flex flex-col justify-center mex-w-md'>
          <h1 className='mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10'>
            Si puedes pensarlo, 
            <TypeAnimation
              sequence={[
                "puedes programarlo.", 1000,
                "puedes optimizarlo.", 1000,
                "puedes implementarlo.", 1000,
                "puedes desarrollarlo.", 1000
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
              className='block font-bold text-secondary'
              />
            </h1>
            <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8'>
            ¡Hola! Soy Fava Lucas, Desarrollador Web Full-Stack con experiencia en Frontend y Backend. Me apasiona participar en proyectos colaborativos, donde pueda aportar mis conocimientos, aprender nuevas tecnologías y compartir ideas con el equipo para lograr soluciones eficientes y de calidad. 
            </p>

            <div className='flex items-center justify-center gap-3 md:justify-start md:gap-10'>
              <Link href='https://github.com/FavaLucas' className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl font-bold hover:shadow-white/50'>
                Ver proyectos
              </Link>

              <Link href='#' className='px-3 py-2 transition-all border-2 cursor-pointer text-secondary font-bold border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary'>
                contacto@favalucas.ar
              </Link>

            </div>
        </div>

      </div>
    </div>
  );
}

export default Introduction;