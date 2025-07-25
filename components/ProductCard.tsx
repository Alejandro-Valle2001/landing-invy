import Centro from "@/public/assests/centro.png";
import Metas from "@/public/assests/metas.png";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div id="beneficios" className="pb-28 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center pt-28 px-12 pb-4 md:w-[600px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          Olvidate de usar Excel
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text">
        Convierte números en decisiones
        </div>

        <div className="text-center text-lg mb-4 md:text-xl">
        Visualiza tus ventas, márgenes y pedidos en tiempo real con reportes claros y accionables.


        </div>
      </div>

      <div className="flex flex-col gap-16 lg:flex-row justify-center items-center px-8">
        <div className="shadow-2xl rounded-xl flex justify-center items-center flex-col p-8 max-w-[400px]">
          <Image src={Centro} alt="Centro de control" className="pb-4" />
          <div className="text-2xl font-bold pb-3 text-center">
          Tu centro de control
          </div>
          <div className="text-center">
          Evita el caos de múltiples plataformas. Gestiona tu inventario desde un único lugar.
          </div>
        </div>

        <div className="shadow-2xl rounded-xl flex justify-center items-center flex-col p-8 max-w-[400px]">
          <Image src={Metas} alt="Metas claras, control real" className="pb-4" />
          <div className="text-2xl font-bold pb-3 text-center">
          Metas claras, control real

          </div>
          <div className="text-center">
          Convierte tus metas de negocio en acciones medibles y visualízalas en tiempo real.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
