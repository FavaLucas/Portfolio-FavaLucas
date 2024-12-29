import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";


const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-5xl mx-auto md:grid-cols-2 md:px-20">
        <div className="max-w-[450px] mt-20 md:mt-0">
          <h1 className="text-2xl leading-tight text-center md:text-left md-text-4xl md-mb-5">
            Mis{" "} 
            <span className="font-bold text-secondary">
            habilidades.
            </span>
          </h1>
            <p className="mb-3 text-xl text-gray-300">
            A continuación, te presento las tecnologías, herramientas y metodologias con las que he trabajado, 
            abarcando tanto el desarrollo frontend como backend en mi desarrollo profesional.
            </p>
            <Link href="mailto:contacto@favalucas.ar" className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</Link>
        </div>

        <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
}

export default ServicesPage;