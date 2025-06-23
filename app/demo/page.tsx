"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCheckCircle, FaCreditCard, FaRegClock, FaShieldAlt } from "react-icons/fa";

const DemoPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    correo: "",
    nombreNegocio: "",
    comoConociste: ""
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log("Datos del formulario:", formData);
    alert("¡Registro exitoso! Te enviaremos un correo con los datos de acceso.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/assests/fotologo.png"
                alt="Invy Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-2xl font-bold text-gray-900">invy</span>
            </div>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              ← Volver al inicio
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado izquierdo - Información */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Comprueba los beneficios de{" "}
                <span className="text-blue-600">Invy</span> con una{" "}
                <span className="text-blue-600">demo gratuita.</span>
              </h1>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <FaCreditCard className="mr-3 text-blue-600" />
                <span>No necesitas agregar datos de tarjeta de crédito.</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FaShieldAlt className="mr-3 text-blue-600" />
                <span>La demo gratuita no incluye la emisión de facturas electrónicas.</span>
              </div>
            </div>

            {/* Pasos */}
            <div className="bg-blue-600 text-white rounded-lg p-6">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <span className="text-sm">Registra tus datos</span>
                </div>
                
                <div className="hidden sm:block w-8 h-px bg-white/30"></div>
                
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="bg-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <span className="text-sm text-center sm:text-left">Serás redireccionado a la demo</span>
                </div>
              </div>
            </div>

            {/* Estadística */}
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600">
              <p className="text-2xl font-bold text-gray-900">
                Más de <span className="text-blue-600">611 negocios</span> ya optimizan con{" "}
                <span className="text-blue-600 font-bold">Invy</span>
              </p>
            </div>
          </div>

          {/* Lado derecho - Formulario */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                ¡Empieza a utilizar Invy!
              </h2>
              <p className="text-gray-600">
                Completa el formulario para acceder a tu demo gratuita
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="apellidos"
                    placeholder="Apellidos"
                    value={formData.apellidos}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex">
                  <select className="px-3 py-3 border border-gray-300 rounded-l-lg bg-gray-50 text-gray-700">
                    <option value="+51">+51</option>
                  </select>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo"
                  value={formData.correo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="nombreNegocio"
                  placeholder="Nombre de tu negocio"
                  value={formData.nombreNegocio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <select
                  name="comoConociste"
                  value={formData.comoConociste}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                  required
                >
                  <option value="">¿Cómo te enteraste de Invy?</option>
                  <option value="redes-sociales">Redes sociales</option>
                  <option value="google">Google</option>
                  <option value="recomendacion">Recomendación</option>
                  <option value="publicidad">Publicidad</option>
                  <option value="otro">Otro</option>
                </select>
              </div>



              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 text-lg"
              >
                ¡Activar demo!
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Al registrarte, aceptas nuestros{" "}
                <a href="#" className="text-blue-600 hover:underline">términos y condiciones</a>{" "}
                y{" "}
                <a href="#" className="text-blue-600 hover:underline">política de privacidad</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección adicional con beneficios */}
      <div className="bg-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Invy?
            </h3>
            <p className="text-xl text-gray-600">
              Únete a los cientos de negocios que ya optimizan su inventario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-2xl text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Fácil de usar</h4>
              <p className="text-gray-600">
                Interfaz intuitiva que no requiere capacitación técnica
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRegClock className="text-2xl text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Ahorra tiempo</h4>
              <p className="text-gray-600">
                Automatiza tareas repetitivas y enfócate en hacer crecer tu negocio
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Datos seguros</h4>
              <p className="text-gray-600">
                Tu información está protegida con los más altos estándares de seguridad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage; 